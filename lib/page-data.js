const path = require('path')
const languages = require('./languages')
const versions = Object.keys(require('./all-versions'))
const createTree = require('./create-tree')
const nonEnterpriseDefaultVersion = require('./non-enterprise-default-version')
const englishPath = path.posix.join(__dirname, '..', 'content')

/**
 * We only need to initialize pages _once per language_ since pages don't change per version. So we do that
 * first since it's the most expensive work. This gets us a nested object with pages attached that we can use
 * as the basis for the siteTree after we do some versioning. We can also use it to derive the pageList.
*/
async function loadUnversionedTree () {
  const unversionedTree = {}

  await Promise.all(Object.values(languages)
    .map(async (langObj) => {
      unversionedTree[langObj.code] = await createTree(englishPath, langObj)
    }))

  return unversionedTree
}

/**
 * The siteTree is a nested object with pages for every language and version, useful for nav because it
 * contains parent, child, and sibling relationships:
 *
 * siteTree[languageCode][version].childPages[<array of pages>].childPages[<array of pages>] (etc...)

* Given an unversioned tree of all pages per language, we can walk it for each version and do a couple operations:
 * 1. Add a versioned href to every item, where the href is the relevant permalink for the current version.
 * 2. Drop any child pages that are not available in the current version.
 *
 * Order of languages and versions doesn't matter, but order of child page arrays DOES matter (for navigation).
*/
async function loadSiteTree (unversionedTree) {
  const rawTree = Object.assign({}, (unversionedTree || await loadUnversionedTree()))
  const siteTree = {}

  // For every language...
  await Promise.all(Object.keys(languages).map(async (langCode) => {
    const treePerVersion = {}
    // in every version...
    await Promise.all(versions.map(async (version) => {
      // "version" the pages.
      treePerVersion[version] = versionPages(Object.assign({}, rawTree[langCode]), version)
    }))

    siteTree[langCode] = treePerVersion
  }))

  return siteTree
}

// This step can't be asynchronous because the order of child pages matters.
function versionPages (obj, version) {
  // Add a versioned href as a convenience for use in layouts.
  obj.href = obj.page.permalinks
    .find(pl => pl.pageVersion === version || (pl.pageVersion === 'homepage' && version === nonEnterpriseDefaultVersion))
    .href

  if (!obj.childPages) return obj

  const versionedChildPages = obj.childPages
    // Drop child pages that do not apply to the current version.
    .filter(childPage => childPage.page.applicableVersions.includes(version))
    // Version the child pages recursively.
    .map(childPage => versionPages(Object.assign({}, childPage), version))

  obj.childPages = [...versionedChildPages]

  return obj
}

// Derive a flat array of Page objects in all languages.
async function loadPageList (unversionedTree) {
  const rawTree = unversionedTree || await loadUnversionedTree()
  const pageList = []

  await Promise.all(Object.keys(languages).map(async (langCode) => {
    await addToCollection(rawTree[langCode], pageList)
  }))

  async function addToCollection (item, collection) {
    if (!item.page) return
    collection.push(item.page)

    if (!item.childPages) return
    await Promise.all(item.childPages.map(async (childPage) => await addToCollection(childPage, collection)))
  }

  return pageList
}

// Create an object from the list of all pages with permalinks as keys for fast lookup.
function createMapFromArray (pageList) {
  const pageMap =
    pageList.reduce(
      (pageMap, page) => {
        for (const permalink of page.permalinks) {
          pageMap[permalink.href] = page
        }
        return pageMap
      },
      {}
    )

  return pageMap
}

async function loadPageMap (pageList) {
  const pages = pageList || await loadPageList()
  return createMapFromArray(pages)
}

module.exports = {
  loadUnversionedTree,
  loadSiteTree,
  loadPages: loadPageList,
  loadPageMap
}
