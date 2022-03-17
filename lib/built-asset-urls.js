const fs = require('fs')
const path = require('path')
const crypto = require('crypto')

// Get an MD4 Digest Hex content hash, loosely based on Webpack `[contenthash]`
function getContentHash (absFilePath) {
  const buffer = fs.readFileSync(absFilePath)
  const hash = crypto.createHash('md4')
  hash.update(buffer)
  return hash.digest('hex')
}

function getUrl (relFilePath) {
  const absFilePath = path.join(process.cwd(), relFilePath)
  return `/${relFilePath}?hash=${getContentHash(absFilePath)}`
}

module.exports = {
  main: {
    js: getUrl('dist/index.js'),
    css: getUrl('dist/index.css')
  }
}
