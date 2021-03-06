const path = require('path');
const webpack = require('webpack');

const resolvePath = pathStr => path.resolve(__dirname, pathStr);

module.exports = {
  mode: 'development',
  entry: resolvePath('../src/client/app/index.js'),
  output: {
    filename: 'index.js',
    path: resolvePath('../dist/static')
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      '__SERVER__': false
    })
  ]
}