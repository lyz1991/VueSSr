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
        component: () => import("../App.vue")
      }, {
        path: "/demo",
        name: "demo",
        component: () => import("../pages/demo.vue")
      }
    ]
  })
}
