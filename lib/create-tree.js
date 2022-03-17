const fs = require('fs').promises
const path = require('path')
const Page = require('./page')
const { sortBy } = require('lodash')
const basePath = path.posix.join(__dirname, '..', 'content')

module.exports = async function createTree (originalPath, langObj) {
  // On recursive runs, this is processing page.children items in `/<link>` format.
  // If the path exists as is, assume this is a directory with a child index.md.
  // Otherwise, assume it's a child .md file and add `.md` to the path.
  let filepath
  try {
    await fs.access(originalPath)
    filepath = `${originalPath}/index.md`
  } catch {
    filepath = `${originalPath}.md`
  }

  const relativePath = filepath.replace(`${basePath}/`, '')
  const localizedBasePath = path.posix.join(__dirname, '..', langObj.dir, 'content')

  // Initialize the Page! This is where the file reads happen.
  let page = await Page.init({
    basePath: localizedBasePath,
    relativePath,
    languageCode: langObj.code
  })

  if (!page) {
    // Do not throw an error if Early Access is not available.
    if (relativePath.startsWith('early-access')) return
    // If a translated path doesn't exist, fall back to the English so there is parity between
    // the English tree and the translated trees.
    if (langObj.code !== 'en') {
      page = await Page.init({
        basePath: basePath,
        relativePath,
        languageCode: langObj.code
      })
    }

    if (!page) throw Error(`Cannot initialize page for ${filepath}`)
  }

  // Create the root tree object on the first run, and create children recursively.
  const item = {
    page
  }

  // Process frontmatter children recursively.
  if (item.page.children) {
    item.childPages = sortBy(
      (await Promise.all(item.page.children
        .map(async (child) => await createTree(path.posix.join(originalPath, child), langObj))))
        .filter(Boolean),
      // Sort by the ordered array of `children` in the frontmatter.
      item.page.children
    )
  }

  return item
}
