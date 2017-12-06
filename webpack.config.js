const webpack = require('webpack');
const path = require('path');
// entry:  Entry file where the bundler starts the bundling process.
// output: Location where the bundled Javascript code is to be saved.
// loaders:  Transformations that are applied on a file in our app.

const ROOT_DIR = path.join(__dirname, 'src/client');
const BUILD_DIR = path.resolve(__dirname, 'src/dist');
// const APP_DIR = path.resolve(__dirname, 'src/client/components');

const config = {
  entry: path.join(ROOT_DIR, '/index.jsx'),
  output: {
    path: BUILD_DIR,
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
}
module.exports = config;
