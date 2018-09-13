const webpack = require('webpack')
const path = require('path')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const base = require('./base-config');

module.exports = merge(base, {
  entry:{
    app: 'entry/entry-client.js',
    vendor: [
      "vue",
      "vuex",
      "vue-router",
      'whatwg-fetch',
    ]
  },
  output: {
    path: path.resolve(__dirname, '../build')
  },
  optimization: {
    splitChunks: {
      name: "manifest"
    }
  },
  plugins: [
    new VueSSRClientPlugin(),
    new VueLoaderPlugin()
  ]
  }
)