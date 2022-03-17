const fs = require('fs').promises
const path = require('path')
const { difference, isPlainObject } = require('lodash')
const { getJSON } = require('../helpers/supertest')
const enterpriseServerReleases = require('../../lib/enterprise-server-releases')
// list of REST markdown files that do not correspond to REST API resources
// TODO could we get this list dynamically, say via page frontmatter?
const excludeFromResourceNameCheck = [
  'endpoints-available-for-github-apps.md',
  'permissions-required-for-github-apps.md',
  'index.md'
]

describe('REST references docs', () => {
  jest.setTimeout(3 * 60 * 1000)

  test('markdown file exists for every operationId prefix in the api.github.com schema', async () => {
    const { categories } = require('../../lib/rest')
    const referenceDir = path.join(__dirname, '../../content/rest/reference')
    const filenames = (await fs.readdir(referenceDir))
      .filter(filename => !excludeFromResourceNameCheck.find(excludedFile => filename.endsWith(excludedFile)))
      .map(filename => filename.replace('.md', ''))

    const missingResource = 'Found a markdown file in content/rest/reference that is not represented by an OpenAPI REST operation category.'
    expect(difference(filenames, categories), missingResource).toEqual([])

    const missingFile = 'Found an OpenAPI REST operation category that is not represented by a markdown file in content/rest/reference.'
    expect(difference(categories, filenames), missingFile).toEqual([])
  })

  test('loads api.github.com OpenAPI schema data', async () => {
    const operations = await getJSON('/en/rest/reference/emojis?json=currentRestOperations')
    expect(JSON.stringify(operations).includes('GitHub Enterprise')).toBe(false)
  })

  test('loads Enterprise OpenAPI schema data', async () => {
    const operations = await getJSON(`/en/enterprise/${enterpriseServerReleases.oldestSupported}/user/rest/reference/emojis?json=currentRestOperations`)
    const operation = operations.find(operation => operation.operationId === 'emojis/get')
    expect(isPlainObject(operation)).toBe(true)
    expect(operation.description).toContain('GitHub Enterprise')
  })

  test('loads operations enabled for GitHub Apps', async () => {
    const operations = await getJSON('/en/free-pro-team@latest/rest/overview/endpoints-available-for-github-apps?json=rest.operationsEnabledForGitHubApps')
    expect(operations['free-pro-team@latest'].actions.length).toBeGreaterThan(0)
    expect(operations['enterprise-server@2.22'].actions.length).toBeGreaterThan(0)
  })

  test('no wrongly detected AppleScript syntax highlighting in schema data', async () => {
    const { operations } = require('../../lib/rest')
    expect(JSON.stringify(operations).includes('hljs language-applescript')).toBe(false)
  })
})
