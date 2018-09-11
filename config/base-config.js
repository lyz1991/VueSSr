/**
 * Created by mac on 2018/8/29.
 */
const path = require('path')
module.exports = {
  output: {
    publicPath: '/build/',
    path: path.resolve(__dirname, '../build')
  },
  module: {
    rules:[{
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        preserveWhitespace: false,
        extractCSS: true,
        postcss: [
          require("autoprefixer")({
            browsers: ["last 3 versions"]
          })
        ],
        loaders: {
          scss: [
            "vue-style-loader",
            {
              loader: "css-loader"
            },
            "sass-loader"
          ]
        },
        cssModules: {
          localIdentName:"[local]-[hash:base64:5]",
          camelCase: true
        }
      },
      exclude: [/node_modules/, /ignore_lib/]
    },
      {
      test: /\.(scss|css)$/,
      use: ["vue-style-loader", "css-loader", "postcss-loader", "sass-loader"]
    },
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: [/node_modules/, /ignore_lib/]
      }]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src/components'),
      'entry': path.resolve(__dirname, '../src/entry'),
    },
    extensions: [".js", ".vue", ".scss"]
  }
}