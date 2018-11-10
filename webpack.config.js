const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const outputDirectory = 'dist';

module.exports = {
	resolve: {
		alias: {
			src: path.resolve(__dirname, 'src'),
			styles: path.resolve(__dirname, 'styles'),
			fixtures: path.resolve(__dirname, 'resources')
		}
	},
	entry: 'src/client/index.js',
	output: {
		path: path.join(__dirname, outputDirectory),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
						options: { minimize: true }
					}
				]
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'sass-loader'
					}
				]
			},
			{
				test: /\.(png|woff|woff2|eot|ttf|svg)$/,
				loader: 'url-loader?limit=100000'
			}
		]
	},
	devServer: {
		proxy: {
			'/api': 'http://localhost:8000'
		}
	},
	plugins: [
		new CleanWebpackPlugin([outputDirectory]),
		new HtmlWebPackPlugin({
			template: './public/index.html'
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css'
		})
	]
};
