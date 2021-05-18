// scripts/config/webpack.prod.js
const { merge } = require('webpack-merge')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const CssMinimizerPlugin = require('css-minimizer-webpack-plugin') // 压缩生产环境打包后的 css 文件
const TerserPlugin = require("terser-webpack-plugin") // 用去去除生产环境的无用js代码，webpack5 之后自带，不需要另行安装，直接引入使用即可

const common = require('./webpack.base')
const { PROJECT_PATH } = require('../constant')

module.exports = merge(common, {
  mode: 'production',
  target: 'browserslist',
  devtool: false,
  output: {
    filename: 'js/[name].[contenthash:8].js',
    path: path.resolve(PROJECT_PATH, './dist'),
    assetModuleFilename: 'images/[name].[contenthash:8].[ext]',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].chunk.css',
    }),
  ],
  optimization: {
    minimize: true,
    minimizer:[
      new TerserPlugin({
        extractComments: false, // 设为 false 表示去除所有注释，除了有特殊标志的注释如 @preserve 标记
        terserOptions: {
          // pure_funcs：去除函数，如上述配置的意思是将所有 console.log 函数去除
          compress: { pure_funcs: ['console.log'] }, 
        }
      }),
      new CssMinimizerPlugin()
    ],
    splitChunks: {
      chunks: 'all',
      minSize: 0,
    },
  }
})
