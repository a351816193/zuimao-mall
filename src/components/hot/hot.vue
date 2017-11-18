<template>
  <div>
    <v-hot-time-nav id="fixedNav" v-show=""></v-hot-time-nav>
    <v-focus></v-focus>
    <v-hot-time-nav></v-hot-time-nav>
  </div>
</template>
<script type="text/javascript">
import focus from '../focus/focus.vue'
import hot_time_nav from '../hot/hot_time_nav.vue'
export default {
  data () {
    return {
      isFixed: false
    }
  },
  components: {
    'v-focus': focus,
    'v-hot-time-nav': hot_time_nav
  },
  computed: {
    fixedNav () {

    }
  }

}
</script>
