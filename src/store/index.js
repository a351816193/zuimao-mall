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
    updateProducts(state, payload) {
      axios.get(payload.productsAPI).then(res => {
        state.products = res.data.products[state.activeIndex];
      })
    },
    loadMoreProducts(state, payload) {
      axios.get(payload.productsAPI).then(res => {
        state.products = state.products.concat(res.data.products[state.activeIndex]);
        console.log('products.length', state.products.length)
      })
    }
  },
  getters: {
  },
  actions: {
  },
  modules: {
    nowTimeIndex: nowTimeIndex
  }
})
export default store
