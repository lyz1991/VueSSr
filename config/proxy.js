const proxy = require('http-proxy-middleware')
const tables = require('./http_prefix')
module.exports = (app) => {
  for (let i = 0; i < tables.length; i ++) {
    app.use(tables[i].proxy, proxy({
      target: tables[i].target,
      changeOrigin: true
    }))
  }
}