<template>
  <div>
    <v-menu-nav class="nav-menu" id="menu"></v-menu-nav>
    <router-view></router-view>
  </div>
</template>
<script type="text/javascript">
  import menu_nav from '../menu_nav/menu_nav.vue'
  import {mapState} from 'vuex'
  export default {
    components: {
      'v-menu-nav': menu_nav
    },
    computed: mapState(['isShowNav']),
    watch: {
      $route(to, from) {
        if (to.path.indexOf('home') !== -1) {
          this.$store.dispatch('showNav');
          // this.$store.dispatch('showFooter');
        } else {
          this.$store.dispatch('hideNav');
          // this.$store.dispatch('hideFooter');
        }
      }
    }
  }
</script>
