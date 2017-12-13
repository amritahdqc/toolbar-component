#Open this in command p as an admin
#cd ../Documents/GitHub/toolbar-component
npm init

# Install webpack
# Add to dev dependencies
#npm install webpack, webpack web server --save-dev
npm i webpack -S
npm i webpack webpack-dev-server --save-dev

# Install babel
npm i babel-cli babel-core babel-loader babel-preset-latest babel-preset-react -D

#To auto bundle CSS/LESS, run
npm i style-loader css-loader less-loader less -D

#Add to webpack.config.js under module:
# { test: /\.less$/, loaders: ["style-loader", "css-loader", "less-loader"]}

# Install ESLINT
npm install eslint --save-dev
./node_modules/.bin/eslint --init

#You should then setup a configuration file:
npm install -g eslint

# Check airbnb for version  numbers and install the exact version numbers for eslint/related packages

eslint eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y
eslint --init

npm install eslint eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y


#After that, you can run ESLint on any file or directory like this:
eslint eslintconfig.js

npm install --save-dev eslint-config-airbnb
#.eslintrc.js  "extends": "airbnb"

npm install eslint --save-dev
#Install mocha
npm i mocha --save-dev

#install styled components
npm i styled-components --save-dev

echo "Installing React and related libs..."
# Install React, React DOM
npm i react react-dom -D

echo " React 26 needs Babel 7 and plugin transforms"
npm update @babel/core @babel/plugin-transform-react-jsx
# npm update eslint@3.x babel-eslint@7

#Do this manually
#./node_modules/.bin/webpack -d

