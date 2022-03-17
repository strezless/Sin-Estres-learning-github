#!/usr/bin/env node

const fs = require('fs')
const mkdirp = require('mkdirp').sync
const path = require('path')
const program = require('commander')
const allVersions = require('../../lib/all-versions')
const payloadsDir = 'lib/webhooks/static'

// [start-readme]
//
// This script creates new static webhook payload files for a new version.
//
// [end-readme]

program
  .description('Create new payload files in lib/webhooks/static/<new_version> based on an existing version.')
  .option('-n, --newVersion <version>', 'The version to copy the payloads to. Must be in <plan@release> format.')
  .option('-o, --oldVersion <version>', 'The version to copy the payloads from. Must be in <plan@release> format.')
  .parse(process.argv)

const newVersion = program.newVersion
const oldVersion = program.oldVersion

if (!(newVersion && oldVersion)) {
  console.log('Error! You must provide --newVersion and --oldVersion.')
  process.exit(1)
}

if (!(Object.keys(allVersions).includes(newVersion) && Object.keys(allVersions).includes(oldVersion))) {
  console.log('Error! You must provide the full name of a currently supported version, e.g., enterprise-server@2.22.')
  process.exit(1)
}

const newVersionDirName = allVersions[newVersion].miscVersionName
const oldVersionDirName = allVersions[oldVersion].miscVersionName

const srcDir = path.join(payloadsDir, oldVersionDirName)
const destDir = path.join(payloadsDir, newVersionDirName)

// create the new directory
mkdirp(destDir)

// copy the files
fs.readdirSync(srcDir).forEach(file => {
  const srcFile = path.join(srcDir, file)
  const destFile = path.join(destDir, file)
  fs.copyFileSync(srcFile, destFile)
})

// check that it worked
if (!fs.existsSync(destDir)) {
  console.log(`Error! A new directory was not successfully created at ${destDir}.`)
  process.exit(1)
}

if (!fs.readdirSync(destDir).length) {
  console.log(`Error! The directory created at ${destDir} is empty.`)
  process.exit(1)
}

// print success message
console.log(`Done! Copied ${srcDir} to ${destDir}.`)
