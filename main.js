const app = require('express')()
const express = require('express')
const webpack = require('webpack')
const path = require('path')
const { createBundleRenderer } = require('vue-server-renderer')
const isDev = process.env.NODE_ENV === 'dev'
let renderer
let readyPromise
app.use(express.static('./build'))
function createRenderer (bundle, options) {
  // https://github.com/vuejs/vue/blob/dev/packages/vue-server-renderer/README.md#why-use-bundlerenderer
  return createBundleRenderer(bundle, Object.assign(options, {
    // this is only needed when vue-server-renderer is npm-linked
    basedir: path.resolve('./build'),
    template: require('fs').readFileSync('./index.template.html', 'utf-8'),
    // recommended for performance
    runInNewContext: false
  }))
}
if (isDev) {
  readyPromise = require('./config/setup-dev-server')(
    app,
    path.resolve(__dirname, './index.template.html'),
    (bundle, options) => {
      renderer = createRenderer(bundle, options)
    }
  )
} else {
  renderer = createBundleRenderer(require('./build/vue-ssr-server-bundle.json'), {
    template: require('fs').readFileSync('./index.template.html', 'utf-8'),
    clientManifest: require('./build/vue-ssr-client-manifest.json'),
    runInNewContext: false
  })
}
const render = (req, res) => {
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
    console.log('noerr')
    res.end(html)
  })
}
app.get('*', isDev ? (req, res) => {
  console.log('DEV')
  readyPromise.then(() => {
    return render(req, res)
  })
} : render)

app.listen(8090, () => {
  console.log('ok')
})