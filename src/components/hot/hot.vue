<template>
  <div>
    <v-focus></v-focus>
    <v-adv></v-adv>
    <hot-time-nav @updateTimeIndex="get_hot_products"></hot-time-nav>
    <v-products :products='this.$store.state.products'></v-products>
  </div>
</template>
<script type="text/javascript">
import focus from '../focus/focus.vue'
import adv from '../adv/adv.vue'
import hot_time_nav from './hot_time_nav.vue'
import c_products from '../products/products.vue'
import Vue from 'vue'
export default {
  data () {
    return {
      hot_products: this.$store.state.products
    }
  },
  components: {
    'v-focus': focus,
    'v-adv': adv,
    'hot-time-nav': hot_time_nav,
    'v-products': c_products
  },
  methods: {
    get_hot_products: function() {
      this.$nextTick(function() {
        this.$store.commit({
          type: 'get_products',
          productsAPI: '../../static/products.json'
        })
      })
    }
  },
  computed: {

  },
  created() {
    this.$nextTick(function() {
      this.$store.commit({
        type: 'get_products',
        productsAPI: '../../static/products.json'
      })
    })
  }
}
</script>
