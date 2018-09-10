/**
 * Created by mac on 2018/8/22.
 */
const autoprefixer = require("autoprefixer");

module.exports = () => ({
  plugins: [
    autoprefixer({
      browsers: ["last 3 versions"],
      remove: false
    })
  ]
});
