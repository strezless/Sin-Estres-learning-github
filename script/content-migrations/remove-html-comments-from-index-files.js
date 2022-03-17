#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const walk = require('walk-sync')
const contentDir = path.join(process.cwd(), 'content')

// remove legacy commented out conditionals in index.md files
walk(contentDir, { includeBasePath: true, directories: false })
  .filter(file => file.endsWith('index.md'))
  .forEach(file => {
    const newContents = fs.readFileSync(file, 'utf8')
      .replace(/\n<!-- (if|endif) .*?-->/g, '')
    fs.writeFileSync(file, newContents)
  })
