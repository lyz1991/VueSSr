/**
 * Created by mac on 2018/8/22.
 */
const autoprefixer = require("autoprefixer");
const pxtoviewport = require('postcss-px-to-viewport');
const writesvg = require('postcss-write-svg')
module.exports = () => ({
  plugins: [
    autoprefixer({
      browsers: ["last 3 versions"],
      remove: false
    }),
    pxtoviewport({
      viewportWidth: 750,
      viewportUnit: 'vw'
    }),
    writesvg({
    })
  ]
});
