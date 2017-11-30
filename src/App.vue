<template>
  <div id="app">
    <v-header></v-header>
    <div class="content">
      <v-menu-nav class="nav-menu" id="menu"></v-menu-nav>
    </div>
  </div>
</template>
<script>
import header from './components/header/header.vue'
import menu_nav from './components/menu_nav/menu_nav.vue'
import hot from './components/hot/hot.vue'
import flexible from '../node_modules/lib-flexible/flexible.js'
export default {
  name: 'app',
  components: {
    'v-header': header,
    'v-menu-nav': menu_nav,
    'v-hot': hot
  }
}
</script>

<style lang="scss">
@import './common/iconfont/iconfont.css';
@import './assets/css/reset.css';
@import './common/sass/global.scss';
html {
    font-size: 75px;
    min-width: 320px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.content{
 margin-top: 1.066667rem;
}
</style>
