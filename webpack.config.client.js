const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/client.ts',
  output: {
    filename: 'client.js',
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
  plugins: [
    new HtmlWebpackPlugin()
  ],
  devServer: {
    port: 3000,
    historyApiFallback: true,
    index: 'assets/index.html',
    proxy: {
      '/api': 'http://localhost:4000'
    }
  }
}
