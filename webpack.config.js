const path = require('path');

// entry:  Entry file where the bundler starts the bundling process.
// output: Location where the bundled Javascript code is to be saved.
// loaders:  Transformations that are applied on a file in our app.

const BUILD_DIR = path.resolve(__dirname, './wwwroot/js');
const ROOT_DIR = path.join(__dirname, 'src');

const config = {
    entry: `${ROOT_DIR}/index.jsx`,
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: 'wwwroot',
        port: 8001,
    },
    module: {
        loaders: [
            { test: /\.html$/, loader: 'html-loader', exclude: /node_modules/ },
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.less$/, loaders: ['style-loader', 'css-loader', 'less-loader'], exclude: /node_modules/ },
        ],
    },
};
module.exports = config;
