import Vue from 'vue'
import Vuex from 'vuex'

import home from '@/store/home'
import city from '@/store/city'
import detail from '@/store/detail'
import video from '@/store/video'
import my from '@/store/my'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    home,
    city,
    detail,
    video,
    my
  }
})
