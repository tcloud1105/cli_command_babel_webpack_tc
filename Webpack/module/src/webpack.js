const path = require('path')
const hwp = require('html-webpack-plugin') 
const uglifyjs = require('uglifyjs-webpack-plugin') 
const webpack = require('webpack')

module.exports = {
	entry:{
	   //main:'./src/main.js'
	   main1:'./src/main2.js',
	   main2:'./src/main3.js'
	},
	output:{
		path:path.resolve(__dirname, 'dist'),
		filename:'[hash].bundle.js',
		publicPath:'./'
		
	},
	
	plugins:[
		 new uglifyjs(),
		 new hwp(),
		 new webpack.optimize.CommonsChunkPlugin({
			 name:'common'
		 }) // let you remove duplicate code
	]
}