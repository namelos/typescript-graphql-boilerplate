const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/browser/index.tsx',
  output: {
    filename: 'main.js',
    publicPath: '/'
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
  devServer: {
    port: 3000,
    historyApiFallback: true,
    proxy: {
      '*': 'http://localhost:4000'
    }
  }
}
