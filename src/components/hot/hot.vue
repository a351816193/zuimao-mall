<template>
  <div>
    <v-focus></v-focus>
    <v-adv></v-adv>
    <hot-time-nav :CnowTimeIndex="PnowTimeIndex"></hot-time-nav>
    <v-products :ontimePro="products" v-on:listenGetTimeIndex="getProducts"></v-products>
  </div>
</template>
<script type="text/javascript">
import focus from '../focus/focus.vue'
import adv from '../adv/adv.vue'
import hot_time_nav from './hot_time_nav.vue'
import c_products from '../products/products.vue'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import nowTimeIndex from '../../assets/js/nowTimeIndex'
Vue.use(VueAxios, axios)
export default {
  data () {
    return {
      products: [],
      PnowTimeIndex: nowTimeIndex.nowTimeIndex()
    }
  },
  components: {
    'v-focus': focus,
    'v-adv': adv,
    'hot-time-nav': hot_time_nav,
    'v-products': c_products
  },
  methods: {
    getProducts: function(activeTimeIndex) {
      let productsAPI = '../../../static/products.json'
      console.log(activeTimeIndex)
      axios.get(productsAPI).then(res => {
        this.products = res.data.products[activeTimeIndex];
      })
    }
  },
  computed: {

  },
  created () {
    let productsAPI = '../../../static/products.json'
    axios.get(productsAPI).then(res => {
      this.products = res.data.products[this.PnowTimeIndex];
      // console.log(this.getProducts())
    })
  }
}
</script>
