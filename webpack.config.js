const HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = ({ mode }) => {
  return {
    mode: 'development', 
    entry: {
    	element: './my-element.js',
   	},
    devServer: {
    	contentBase: './dist',
  	},
    plugins: [
      new HtmlWebpackPlugin({
        template: './dev/index.html' 
      })
    ],
    output: {
    	filename: '[name].bundle.js',
    	path: path.resolve(__dirname, 'dist'),
    	clean: true,
  	},
    devtool: 'source-map'
  };
};