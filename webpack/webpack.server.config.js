const path = require('path');
const nodeExternals = require('webpack-node-externals');
const resolvePath = pathStr => path.resolve(__dirname, pathStr);
const webpack = require('webpack');

process.env.BABEL_ENV = 'node';

module.exports = {
  mode: 'development',
  target: 'node',
  entry: resolvePath('../src/server/app/index.js'),
  output: {
    filename: 'app.js',
    path: resolvePath('../dist/server')
  },
  externals: [nodeExternals()],
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      '__SERVER__': true
    })
  ]
}