//To install webpack, type npm install webpack and npm install webpack-dev-server
// in order to parse and bundle css file, we will need two loader: css-loader, style-loader
// to apply you can use inline method and always style-loader before css-loader or using cli
// Using the config file, we only need to type /node_modules/.bin/webpack in the cli
// to parse image file, we need to install file-loader
// to parse and bundle packages such as jquery.js or lodash.js, we'll need expose-loader and we must require the package in the js entry file
// the easiest way of configuring expose-loader is via the inline method, for example require('expose-loader?$!jquery') or var $ = require('jquery')
// About plugins, there are two types of plugins: built-in and third party plugins
// third-party plugins are installed using the npm command
// to configure a plugin, you can an independent js file or the webpack.config file
// webpack --watch turns on monitor mode to monitor any changes made
// to use webpack-dev-server, you must add the following options: --inline --hot
// when using webpack-dev-server for bundling, all bundled files are stored in memory, on browser, type localhost:8080 to view the results
// if using other for your config than webpack.config.js, you have to specify --config to specify the config file