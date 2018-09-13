import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

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
