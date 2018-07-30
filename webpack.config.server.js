const path = require('path')
const NodemonPlugin = require('nodemon-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/server.ts',
  output: {
    filename: 'server.js'
  },
  resolve: {
    extensions: ['js', 'jsx', 'ts', 'tsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new NodemonPlugin()
  ]
}
