import Vue from 'vue'
import Vuex from 'vuex'
import nowTimeIndex from '../assets/js/nowTimeIndex.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    activeIndex: nowTimeIndex.nowTimeIndex(),
    productsAPI: '../../static/products.json',
    products: []
  },
  mutations: {
    updateTimeIndex(state, payload) {
      state.activeIndex = payload.activeIndex;
    },
    get_products(state, payload) {
      axios.get(state.productsAPI).then(res => {
        console.log('nohahah')
        state.products = res.data.products[state.activeIndex];
      })
    }
  },
  getters: {
  },
  modules: {
    nowTimeIndex: nowTimeIndex
  }
})
export default store
