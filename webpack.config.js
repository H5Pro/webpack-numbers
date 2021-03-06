/**
 * Created by fjl on 2019/7/29
 */

var path = require('path');

module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: "webpack-numbers.js",
		library: 'webpackNumbers',
		libraryTarget: "umd"
	},
	externals: {
		lodash: {
			commonjs: 'lodash',
			commonjs2: 'lodash',
			amd: 'lodash',
			root: '_'
		}
	},
};

