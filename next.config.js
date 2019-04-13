
// next.config.js
const withTypescript = require('@zeit/next-typescript')
module.exports = withTypescript()

// next.config.js
const withSass = require('@zeit/next-sass')
module.exports = withSass({
  cssModules: true
})