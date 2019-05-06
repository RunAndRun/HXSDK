const path = require('path')
const MinifyPlugin = require("babel-minify-webpack-plugin")

module.exports = {
  entry: {
    app: './src/sdk/index.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'sdk.js',
    library: 'WebIM'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: ['babel-loader']
      }
    ]
  },
  plugins: [
    new MinifyPlugin()
  ]
}
