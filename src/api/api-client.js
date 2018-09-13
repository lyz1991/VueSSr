import 'whatwg-fetch'
let headers = {
  'Accept': 'application/json'
}
let convertQuery = params => {
  if (!params) {
    return ''
  }
  return Object.keys(params).reduce((pre, key) => (pre + `${key}=${params[key]}&`), '').slice(0, -1)
}
let request = (url, init, loading) => fetch(url, init, loading).then((res) => {
  if (res.ok) {
    let type = res.headers.get('Content-Type').split(';')[0]
    switch (type) {
      case 'image/jpeg':
        return res.blob()
      case 'application/json':
        return res.json()
    }
  } else {
  }
}).catch(() => {
})
let checkres = (res) => {
  return res
}
const $ = {
  get: (url, query, loading = false) => {
    console.log('get')
    if (loading) {
    }
    return request(`${url}?${convertQuery(query)}`, {
      credentials: 'include',
      method: 'get',
      headers: headers
    }).then((res) => {
      return checkres(res)
    })
  },
  post: (url, query, loading = false) => {
    if (loading) {
      doc.actions.setLoading(store, true)
    }
    return request(url, {
      credentials: 'include',
      method: 'post',
      headers: Object.assign({}, headers, {
        'Content-Type': 'application/x-www-form-urlencoded'
      }),
      body: convertQuery(query)
    }, loading).then((res) => {
      return checkres(res)
    })
  }
}
export default $
