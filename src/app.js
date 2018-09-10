/**
 * Created by mac on 2018/8/15.
 */
import Vue from 'vue'
import App from './App.vue'
import { createStore } from './store/store'
import { createRouter } from './router/router'
export const createApp = () => {
  const store = createStore()
  const router = createRouter()
  const app = new Vue({
    render: h => h(App),
    router,
    store
  })
  return {app, store, router}
}