const path = require('path')
const NodemonPlugin = require('nodemon-webpack-plugin')

module.exports = {
  mode: 'development',
  target: 'node',
  entry: './src/server.ts',
  output: {
    filename: 'server.js'
  },
  resolve: {
    extensions: ['.js', '.mjs', '.jsx', '.ts', '.tsx', '.json']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto",
      },
      {
        test: /\.(graphql([es])?|gql)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'webpack-graphql-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new NodemonPlugin()
  ]
}
