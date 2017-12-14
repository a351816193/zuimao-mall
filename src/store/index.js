import Vue from 'vue'
import Vuex from 'vuex'
import nowTimeIndex from '../assets/js/nowTimeIndex.js'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    nowIndex: nowTimeIndex.nowTimeIndex(),
    activeIndex: nowTimeIndex.nowTimeIndex()
  },
  mutations: {
    updateActiveIndex (state, payload) {
      state.activeIndex = payload.activeIndex;
    }
  }
})

export default store
