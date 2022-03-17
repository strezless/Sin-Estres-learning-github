// Import our SCSS files so webpack will process them
import '../stylesheets/index.scss'
import displayPlatformSpecificContent from './display-platform-specific-content'
import explorer from './explorer'
import search from './search'
import nav from './nav'
import browserDateFormatter from 'browser-date-formatter'
import sidebar from './sidebar'
import wrapCodeTerms from './wrap-code-terms'
import print from './print'
import localization from './localization'
import helpfulness from './helpfulness'
import experiment from './experiment'
import copyCode from './copy-code'
import initializeEvents from './events'
import filterCards from './filter-cards'
import allArticles from './all-articles'
import devToc from './dev-toc'
import releaseNotes from './release-notes'
import showMore from './show-more'
import airgapLinks from './airgap-links'

document.addEventListener('DOMContentLoaded', async () => {
  displayPlatformSpecificContent()
  explorer()
  search()
  nav()
  browserDateFormatter()
  sidebar()
  wrapCodeTerms()
  print()
  localization()
  copyCode()
  filterCards()
  allArticles()
  devToc()
  showMore()
  airgapLinks()
  releaseNotes()
  initializeEvents()
  experiment()
  helpfulness()
})
