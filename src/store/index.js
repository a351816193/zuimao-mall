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
    products: [],
    focuses: [],
    onsale: Object.create(null)
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
      })
    },
    updateFocus(state, payload) {
      axios.get(payload.focusAPI).then(res => {
        state.focuses = res.data.focuses;
      })
    },
    updateOnsale(state, payload) {
      axios.get(payload.onsaleAPI).then(res => {
        state.onsale = res.data.onsale[state.activeIndex];
      })
    }
  },
  getters: {
    getProducts: state => state.products,
    getFocuses: state => state.focuses
  },
  actions: {
  },
  modules: {
    nowTimeIndex: nowTimeIndex
  }
})
export default store
