const path = require("path");
module.exports = {
	mode: "development",
	output: {
		publicPath: "/dist/",
		chunkFilename: '[name].[chunkhash:5].chunk.js'
	},
	entry: [
		'react-hot-loader/patch',
		"./src/index.js"
	],
	module: {
		rules: [
			{
				test: /\.js?$/,
				loader: "babel-loader",
				exclude: "/node_modules/",
				options: {
					presets: ["env","react"]
				}
			}
		]
	},
	resolve: {
		extensions: ['.js','jsx']
	},
	devServer: {
		contentBase: path.resolve(__dirname,"dist/"),
		hot: true
	}
}