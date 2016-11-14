var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry:'./src/app.js',
	output:{
		path:'./static/build',
		filename:'bundle.min.js'
	},
	resolve:{
		root:[
			path.resolve('./src')
		]
	},
	plugins: [
	    new webpack.optimize.DedupePlugin(),
	    new webpack.optimize.OccurenceOrderPlugin(),
	    new webpack.optimize.UglifyJsPlugin({
	      compress: { warnings: false },
	      mangle: true,
	      sourcemap: false,
	      beautify: false,
	      dead_code: true
	    })
  ]
}