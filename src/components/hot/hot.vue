<template>
  <div>
    <v-focus></v-focus>
    <v-adv></v-adv>
    <hot-time-nav></hot-time-nav>
    <v-products :products='get_hot_products'></v-products>
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
Vue.use(VueAxios, axios)
export default {
  data () {
    return {
      hot_products: []
    }
  },
  components: {
    'v-focus': focus,
    'v-adv': adv,
    'hot-time-nav': hot_time_nav,
    'v-products': c_products
  },
  methods: {

  },
  computed: {
    get_hot_products: function() {
      let productsAPI = '../../../static/products.json'
      let cc = axios.get(productsAPI).then(res => {
        console.log(this.$store.state.activeIndex)
        return res.data.products[this.$store.state.activeIndex];
      })
    }
  }
}
</script>
