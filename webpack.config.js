const serverConfigs = require('./webpack.config.server')
const clientConfigs = require('./webpack.config.client')

module.exports = [
  clientConfigs,
  serverConfigs
]
