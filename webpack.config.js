const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './src/index.tsx',
	devtool: "eval-source-map",
	mode: "development",
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, `./app`),
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			}
		],
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src")
		},
		extensions: ['.tsx', '.ts', '.js'],
	}
};
