<template>
  <div>
    <v-focus></v-focus>
    <v-adv></v-adv>
    <swiper  id="hot-time-nav" class="swiper-wrapper hot-time-nav" :options="swiperOption">
      <swiper-slide class="nav-item">
        <router-link to="hot/hot_products">
          <i class="time">昨日</i><br><span class="statu">别错过</span>
        </router-link>
      </swiper-slide>
      <swiper-slide class="nav-item">
        <router-link to="no_hot">
          <i class="time">20:00</i><br><span class="statu">昨日精选</span>
        </router-link>
      </swiper-slide>
      <swiper-slide class="nav-item">
        <router-link to="hot/hot_products">
          <i class="time">21:00</i><br><span class="statu">昨日精选</span>
        </router-link>
      </swiper-slide>
      <swiper-slide class="nav-item">
        <router-link to="hot/hot_products">
          <i class="time">09:00</i><br><span class="statu">抢购中</span>
        </router-link>
      </swiper-slide>
      <swiper-slide class="nav-item">
        <router-link to="hot/hot_products">
          <i class="time">10:00</i><br><span class="statu">抢购中</span>
        </router-link>
      </swiper-slide>
      <swiper-slide class="nav-item">
        <router-link to="hot/hot_products">
          <i class="time">11:00</i>
          <br><span class="statu">抢购中</span>
        </router-link>
        </swiper-slide>
      <swiper-slide class="nav-item">
        <router-link to="hot/hot_products">
          <i class="time">12:00</i>
          <br><span class="statu">抢购中</span>
        </router-link>
        </swiper-slide>
      <swiper-slide class="nav-item">
        <router-link to="hot/hot_products">
          <i class="time">14:00</i>
          <br><span class="statu">抢购中</span>
        </router-link>
        </swiper-slide>
      <swiper-slide class="nav-item">
        <router-link to="hot/hot_products">
          <i class="time">16:00</i>
          <br><span class="statu">抢购中</span>
        </router-link>
        </swiper-slide>
      <swiper-slide class="nav-item">
        <router-link to="hot/hot_products">
          <i class="time">19:00</i>
          <br><span class="statu">抢购中</span>
        </router-link>
        </swiper-slide>
      <swiper-slide class="nav-item">
        <router-link to="hot/hot_products">
          <i class="time">20:00</i>
          <br><span class="statu">抢购中</span>
        </router-link>
        </swiper-slide>
      <swiper-slide class="nav-item">
        <router-link to="hot/hot_products">
          <i class="time">21:00</i>
          <br><span class="statu">抢购中</span>
        </router-link>
        </swiper-slide>
      <swiper-slide class="nav-item">
        <router-link to="hot/hot_products">
          <img class="tomorrow" src="./../../assets/images/tomorrow.png">
        </router-link>
      </swiper-slide>
    </swiper>
    <router-view></router-view>
  </div>
</template>
<script type="text/javascript">
import Vue from 'vue'
import focus from '../focus/focus.vue'
import adv from '../adv/adv.vue'
// import hot_time_nav from './hot_time_nav.vue'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
export default {
  data () {
    return {
      isFixed: false,
      swiperOption: {
        autoplay: 0,
        slidesPerView: 5,
        centeredSlides: true,
        spaceBetween: 20,
        initialSlide: this.nowActiveIndex(),
        direction: 'horizontal'
      },
      products: {}
    }
  },
  components: {
    'v-focus': focus,
    'v-adv': adv,
    // 'hot-time-nav': hot_time_nav,
    'swiper': swiper,
    'swiper-slide': swiperSlide
  },
  methods: {
    nowActiveIndex () {
      let nowHour = new Date().getHours();
      switch (nowHour) {
        case 0:
          return 11;
        case 1:
          return 0;
        case 2:
          return 0;
        case 3:
          return 0;
        case 4:
          return 0;
        case 5:
          return 1;
        case 6:
          return 1;
        case 7:
          return 2;
        case 8:
          return 2;
        case 9:
          return 3;
        case 10:
          return 4;
        case 11:
          return 5;
        case 12:
          return 6;
        case 13:
          return 6;
        case 14:
          return 7;
        case 15:
          return 7;
        case 16:
          return 8;
        case 17:
          return 8;
        case 18:
          return 8;
        case 19:
          return 9;
        case 20:
          return 10;
        case 21:
          return 11;
        default:
          return 12;
      }
    }
  },
  computed: {
    fixedNav () {

    },
    getproducts () {
      let productsAPI = '../../../static/products.json'
      axios.get(productsAPI).then(res => {
        console.log(res)
      })
    }
  },
  created () {
    let productsAPI = '../../../static/products.json'
    axios.get(productsAPI).then(res => {
      this.products = res.data;
    })
  }

}
</script>
<style lang="scss">
@import './../../common/sass/global.scss';
@import './../../common/swiper-3.4.2.min.css';
.hot-time-nav
{
    z-index: 999;
    overflow: hidden;
    background-color: #fff;
    .swiper-slide-active
    {
        a
        {
            color: $primarycolor;
            border-bottom: 2px solid $primarycolor;
        }
    }
    .nav-item
    {
      height: 1.6rem;
      @include ver_center;

      a
      {
        font-size: 20px;
        height: 1.16rem;
        padding: .2rem 0;
        text-align: center;
        color: #4d4d4d;
      }
      .tomorrow
      {
        width: 1.76rem;
      }
      .time
      {
        font-size: 18px;
        font-weight: bold;
      }
      .statu
      {
        font-size: 10px;
      }
    }
}
</style>
