const path = require('path')
const patterns = require('../patterns')
const supportedVersions = new Set(Object.keys(require('../all-versions')))
const getOldPathsFromPermalink = require('./get-old-paths-from-permalink')
const { getVersionStringFromPath } = require('../path-utils')
const { getNewVersionedPath } = require('../old-versions-utils')
const removeFPTFromPath = require('../remove-fpt-from-path')

module.exports = function generateRedirectsForPermalinks (permalinks, redirectFrontmatter) {
  // account for Array or String frontmatter entries
  const redirectFrontmatterOldPaths = redirectFrontmatter
    ? Array.from([redirectFrontmatter]).flat()
    : []

  const redirects = {}

  // for every permalink...
  permalinks.forEach(permalink => {
    // get an array of possible old paths, e.g., /desktop/guides/ from current permalink /desktop/
    const possibleOldPaths = getOldPathsFromPermalink(permalink.href, permalink.languageCode, permalink.pageVersion)

    // for each old path, add a redirect to the current permalink
    possibleOldPaths.forEach(oldPath => {
      redirects[oldPath] = permalink.href
    })

    // for every redirect frontmatter old path...
    redirectFrontmatterOldPaths.forEach(frontmatterOldPath => {
      // remove trailing slashes (sometimes present in frontmatter)
      frontmatterOldPath = frontmatterOldPath.replace(patterns.trailingSlash, '$1')

      // support hardcoded versions in redirect frontmatter
      if (supportedVersions.has(frontmatterOldPath.split('/')[1])) {
        redirects[frontmatterOldPath] = permalink.href
        redirects[`/en${frontmatterOldPath}`] = permalink.href
      }

      // get the old path for the current permalink version
      let versionedFrontmatterOldPath = path.posix.join('/', permalink.languageCode, getNewVersionedPath(frontmatterOldPath))
      const versionFromPath = getVersionStringFromPath(versionedFrontmatterOldPath)
      versionedFrontmatterOldPath = removeFPTFromPath(versionedFrontmatterOldPath.replace(versionFromPath, permalink.pageVersion))

      // add it to the redirects object
      redirects[versionedFrontmatterOldPath] = permalink.href

      // then get an array of possible alternative old paths from the current versioned old path
      const possibleOldPathsForVersionedOldPaths = getOldPathsFromPermalink(versionedFrontmatterOldPath, permalink.languageCode, permalink.pageVersion)

      // and add each one to the redirects object
      possibleOldPathsForVersionedOldPaths.forEach(oldPath => {
        redirects[oldPath] = permalink.href
      })
    })
  })

  // filter for unique entries only
  Object.entries(redirects).forEach(([oldPath, newPath]) => {
    if (oldPath === newPath) delete redirects[oldPath]
  })

  return redirects
}
