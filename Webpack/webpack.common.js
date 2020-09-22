const path = require('path')
const webpack = require('webpack')// you do not need to install built-in plugin mais you need to require it
const hwp = require('html-webpack-plugin') // external plugin used to generate automatically html file
const cleaner = require('clean-webpack-plugin')// used to clean automatically the dist folder

module.exports = {
	entry:'./src/entry.js',
	//entry:{
	//	entry_file:'./src/entry.js',// use to control the name of the bundled file
	//	m1:'./src/module1.js',
	//	m2:'./src/module2.js'
	//},
	output:{
		path:path.resolve(__dirname, 'dist'),
		filename:'[hash].bundle.js',
		publicPath:'./'
		//filename:'bundle.js',
		//publicPath:'./dist/'// publicPath's value is decided by index.html's URL
		//path:__dirname + '/dist',
		//filename:'[name].[id].bundle.js'
	},
	module:{
		rules:[
		{
			test:/\.css$/,
			use:['style-loader','css-loader']
		},
		{
			test:/\.(jpg|jpeg|png|gif)$/,
			use:{
				loader:'file-loader',
				options:{
					name:'[name].[ext]',
					//publicPath:'./dist/'
				}
			}
		},
		{
			test:require.resolve('jquery'),
			use:{
				loader:'expose-loader',
				options:'$'
			}
		},
		{
			test:require.resolve('lodash'),
			use:{
				loader:'expose-loader',
				options:'lodash'
			}
		}
		]
	},
	plugins:[
	     new webpack.BannerPlugin('Hello from built-in plugin: Bannerplugin...'),
		 new hwp({
			 template:'./template.html'
		 }),
		 new webpack.HotModuleReplacementPlugin(), // when bundling with webpack-dev-server
		 new cleaner('./dist/'), // ./dist/*.* to delete only files
	]
}