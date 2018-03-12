var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  devtool: 'eval-source-map',
  entry:  __dirname + "/src/app.js",//已多次提及的唯一入口文件
  output: {
    path: __dirname + "/dist",//打包后的文件存放的地方
    filename: "bundle.js"//打包后输出文件的文件名
  },

  devServer: {
      inline: true,
      port: 3333,
      contentBase: "./",//本地服务器所加载的页面所在的目录
      historyApiFallback: true,//不跳转
  },
  module: {
      loaders: [
          {
              test: /\.js$/, // babel 转换为兼容性的 js
              exclude: /node_modules/,
              loader: 'babel-loader',
              query: {
                  presets: ['react', 'latest']
              }
          },
          {
            test: /\.(scss|css)$/,
            loader: ExtractTextPlugin.extract('css-loader', 'css!sass', { publicPath: './'})
          },

      ]
  },

   plugins: [
      new ExtractTextPlugin("style.css")
   ],
}