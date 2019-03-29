const path = require('path')
const MinifyPlugin = require("babel-minify-webpack-plugin")
console.log(path)
module.exports = {
  entry: {
    app: './src/sdk/index.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'sdk-[hash:6].js'
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
