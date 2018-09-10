const server = require('express')()
const express = require('express')
const webpack = require('webpack')
const { createBundleRenderer } = require('vue-server-renderer')
const renderer = createBundleRenderer(require('./build/vue-ssr-server-bundle.json'), {
  template: require('fs').readFileSync('./index.template.html', 'utf-8'),
  clientManifest: require('./build/vue-ssr-client-manifest.json'),
  runInNewContext: false
})
server.use(express.static('./build'))
server.get('*', (req, res) => {
  const context = {
    url: req.url,
    title: 'hello',
    meta:`<meta charset="UTF-8">`
  }
  renderer.renderToString(context, (err, html) => {
    if (err) {
      console.log(err)
      res.status(500).end('Internal Server Error')
      return
    }
    res.end(html)
  })
})

server.listen(8080, () => {
  console.log('ok')
})