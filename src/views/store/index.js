import Vue from 'vue'
import Vuex from 'vuex'

import kanban from './kanban'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    modules: {
      kanban: {
        state: {
          list: []
        },
        ...kanban
      },
    }
  })
}