const { resolve } = require('path');

module.exports = {
  entry: {
    index: './src/test/index.js'
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: resolve('./src/loader/index.js'),
        options: {
          onlyLine: true
        }
      }
    ]
  }
}
