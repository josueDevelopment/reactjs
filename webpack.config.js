const ExtractTextPlugin=require("mini-css-extract-plugin")
module.exports={
	stats: {
		entrypoints: false,
		children: false
	},
	entry:'./src/app/index.js',
	module:{
		rules:[{
			use:["babel-loader"],
			test:/\.(js|jsx)$/,
			exclude:/node_modules/
		},
		{
        test: /\.css$/,
        use: [
          {
            loader: ExtractTextPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              publicPath: '../'
            }
          }, {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: "[local]___[hash:base64:5]"
            }
        }
          ]
      }
		/*{
				test: /\.css/,
				loader: ExtractTextPlugin.extract("style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]")
			}*/]
	},
	output:{
		path:__dirname+'/public',
		filename:'bundle.js'
	},
	plugins:[new ExtractTextPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    })/*new ExtractTextPlugin("style.css",{allChunks:true})*/]

}