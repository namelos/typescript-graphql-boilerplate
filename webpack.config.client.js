const webpack = require('webpack')
const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/browser/index.tsx',
  output: {
    filename: 'main.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.mjs', '.jsx', '.ts', '.tsx', '.json'],
    modules: ['node_modules', path.resolve(__dirname, 'src')]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'awesome-typescript-loader']
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
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    port: 3000,
    historyApiFallback: true,
    hot: true,
    proxy: {
      '*': 'http://localhost:4000'
    }
  }
}
