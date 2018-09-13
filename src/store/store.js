/**
 * Created by mac on 2018/9/6.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as Types from './action_types'
import { serverAjax } from '../api/service'

Vue.use(Vuex)

// 假定我们有一个可以返回 Promise 的
// 通用 API（请忽略此 API 具体实现细节）

export function createStore () {
  return new Vuex.Store({
    state: {
      id: '',
      github: {
      
      }
    },
    actions: {
      async fetchItem ({ commit }, param) {
        const data = await serverAjax()
        commit(Types.SET_ITEM,  data)
      }
    },
    mutations: {
      [Types.SET_ITEM] (state,  res) {
        state.github = res
      }
    }
  })
}