import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

Vue.use(Router)
Vue.use(Meta, {
  keyName: 'head', // the component option name that vue-meta looks for meta info on.
  attribute: 'data-vue-meta', // the attribute name vue-meta adds to the tags it observes
  ssrAttribute: 'data-vue-meta-server-rendered', // the attribute name that lets vue-meta know that meta info has already been server-rendered
  tagIDKeyName: 'vmid' // the property name that vue-meta uses to determine whether to overwrite or append a tag
})

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: "/",
        name: 'app',
        component: () => import("../pages/server.vue")
      }, {
        path: "/client",
        name: "client",
        component: () => import("../pages/client.vue")
      }
    ]
  })
}
