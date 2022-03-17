const { dates, supported } = require('../../lib/enterprise-server-releases')
const languageCodes = Object.keys(require('../../lib/languages'))
const { namePrefix } = require('../../lib/search/config')
const remoteIndexNames = require('../../lib/search/cached-index-names.json')

describe('algolia', () => {
  test('has remote indexNames in every language for every supported GHE version', () => {
    expect(supported.length).toBeGreaterThan(1)
    supported.forEach(version => {
      languageCodes.forEach(languageCode => {
        const indexName = `${namePrefix}-${version}-${languageCode}`

        // workaround for GHES release branches not in production yet
        if (!remoteIndexNames.includes(indexName)) {
          const today = getDate()
          const releaseDate = getDate(dates[version].releaseDate)
          // if the release date is in the future or today, ignore this version;
          // this means if the new index is not uploaded at the time of the release,
          // the test will not fail until the following day.
          if (releaseDate >= today) return
        }

        expect(remoteIndexNames.includes(indexName)).toBe(true)
      })
    })
  })

  test('has remote indexNames in every language for dotcom', async () => {
    expect(languageCodes.length).toBeGreaterThan(0)
    languageCodes.forEach(languageCode => {
      const indexName = `${namePrefix}-dotcom-${languageCode}`
      expect(remoteIndexNames.includes(indexName)).toBe(true)
    })
  })
})

function getDate (date) {
  const dateObj = date ? new Date(date) : new Date()
  return dateObj.toISOString().slice(0, 10)
}
