#!/usr/bin/env node

// [start-readme]
//
// Run this script to fix known frontmatter errors by copying values from english file
// Currently only fixing errors in: 'type', 'changelog'
// Please double check the changes created by this script before committing.
//
// [end-readme]

const { execSync } = require('child_process')
const { get, set } = require('lodash')
const fs = require('fs')
const path = require('path')
const readFileAsync = require('../lib/readfile-async')
const fm = require('../lib/frontmatter')
const matter = require('gray-matter')
const chalk = require('chalk')
const yaml = require('js-yaml')
const ghesReleaseNotesSchema = require('../lib/release-notes-schema')
const revalidator = require('revalidator')

const fixableFmProps = ['type', 'changelog', 'mapTopic', 'hidden', 'layout', 'defaultPlatform', 'showMiniToc', 'allowTitleToDifferFromFilename', 'interactive', 'beta_product']
const fixableYmlProps = ['date']

const loadAndValidateContent = async (path, schema) => {
  let fileContents
  try {
    fileContents = await readFileAsync(path, 'utf8')
  } catch (e) {
    console.error(e.message)
    return null
  }

  if (path.endsWith('yml')) {
    let data; let errors = []
    try {
      data = yaml.safeLoad(fileContents)
    } catch {}
    if (data && schema) {
      ({ errors } = revalidator.validate(data, schema))
    }
    return { data, errors, content: null }
  } else {
    return fm(fileContents)
  }
}

const cmd = 'git diff --name-only origin/main | egrep "^translations/.*/(content/.+.md|data/release-notes/.*.yml)$"'
const changedFilesRelPaths = execSync(cmd).toString().split('\n')

changedFilesRelPaths.forEach(async (relPath) => {
  if (!relPath || relPath.endsWith('README.md')) return

  const localisedAbsPath = path.join(__dirname, '..', relPath)
  // find the corresponding english file by removing the first 2 path segments: /translation/<language code>
  const engAbsPath = path.join(__dirname, '..', relPath.split(path.sep).slice(2).join(path.sep))

  const localisedResult = await loadAndValidateContent(localisedAbsPath, ghesReleaseNotesSchema)
  if (!localisedResult) return
  const { data, errors, content } = localisedResult

  const fixableProps = relPath.endsWith('yml') ? fixableYmlProps : fixableFmProps

  const fixableErrors = errors.filter(({ property }) => {
    const prop = property.split('.')
    return fixableProps.includes(prop[0])
  })

  if (!data || fixableErrors.length === 0) return

  const engResult = await loadAndValidateContent(engAbsPath)
  if (!engResult) return
  const { data: engData } = engResult

  console.log(chalk.bold(relPath))

  const newData = data

  fixableErrors.forEach(({ property, message }) => {
    const correctValue = get(engData, property)
    console.log(chalk.red(`  error message: [${property}] ${message}`))
    console.log(`  fix property [${property}]: ${get(data, property)} -> ${correctValue}`)
    set(newData, property, correctValue)
  })

  let toWrite
  if (content) {
    toWrite = matter.stringify(content, newData, { lineWidth: 10000, forceQuotes: true })
  } else {
    toWrite = yaml.safeDump(newData, { lineWidth: 10000, forceQuotes: true })
  }

  fs.writeFileSync(localisedAbsPath, toWrite)
})
