import Vue from 'vue'
import Vuex from 'vuex'
import nowTimeIndex from '../assets/js/nowTimeIndex.js'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    activeIndex: nowTimeIndex.nowTimeIndex()
  },
  getters: {
    // get_hot_products(state, payload) {
    //   let productsAPI = '../../../static/products.json';
    //   axios.get(productsAPI).then(res => {
    //     return res.data.products[state.activeIndex];
    //   })
    // }
  },
  mutations: {
    updateTimeIndex(state, payload) {
      state.activeIndex = payload.activeIndex;
    }
  },
  modules: {
    nowTimeIndex: nowTimeIndex
  }
})
console.log(store.state.activeIndex)
export default store
