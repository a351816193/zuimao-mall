<template>
  <swiper  id="hot-time-nav" class="swiper-wrapper hot-time-nav" :options="swiperOption">
      <swiper-slide class="nav-item">
        <router-link to="/hot_products"><i class="time">昨日</i><br><span class="statu">别错过</span>
        </router-link>
      </swiper-slide>
      <swiper-slide class="nav-item">
        <router-link to="/hot_products"><i class="time">20:00</i><br><span class="statu">昨日精选</span>
        </router-link>
      </swiper-slide>
      <swiper-slide class="nav-item">
        <router-link to="/hot_products"><i class="time">21:00</i><br><span class="statu">昨日精选</span>
        </router-link>
      </swiper-slide>
      <swiper-slide class="nav-item">
        <router-link to="/hot_products">
          <i class="time">09:00</i><br><span class="statu">抢购中</span>
        </router-link>
      </swiper-slide>
      <swiper-slide class="nav-item">
        <router-link to="/hot_products">
          <i class="time">10:00</i><br><span class="statu">抢购中</span>
        </router-link>
      </swiper-slide>
      <swiper-slide class="nav-item">
        <router-link to="/hot_products">
          <i class="time">11:00</i>
          <br><span class="statu">抢购中</span>
        </router-link>
        </swiper-slide>
      <swiper-slide class="nav-item">
        <router-link to="/hot_products">
          <i class="time">12:00</i>
          <br><span class="statu">抢购中</span>
        </router-link>
        </swiper-slide>
      <swiper-slide class="nav-item">
        <router-link to="/hot_products">
          <i class="time">14:00</i>
          <br><span class="statu">抢购中</span>
        </router-link>
        </swiper-slide>
      <swiper-slide class="nav-item">
        <router-link to="/hot_products">
          <i class="time">16:00</i>
          <br><span class="statu">抢购中</span>
        </router-link>
        </swiper-slide>
      <swiper-slide class="nav-item">
        <router-link to="/hot_products">
          <i class="time">19:00</i>
          <br><span class="statu">抢购中</span>
        </router-link>
        </swiper-slide>
      <swiper-slide class="nav-item">
        <router-link to="/hot_products">
          <i class="time">20:00</i>
          <br><span class="statu">抢购中</span>
        </router-link>
        </swiper-slide>
      <swiper-slide class="nav-item">
        <router-link to="/hot_products">
          <i class="time">21:00</i>
          <br><span class="statu">抢购中</span>
        </router-link>
        </swiper-slide>
      <swiper-slide class="nav-item">
        <router-link to="/hot_products">
          <img class="tomorrow" src="./../../assets/images/tomorrow.png">
        </router-link>
      </swiper-slide>
  </swiper>
  <!--<router-view></router-view>-->
</template>
<script type="text/javascript">
  import Vue from 'vue'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import axios from 'axios'
  import VueAxios from 'vue-axios'
  Vue.use(VueAxios, axios)
  export default {
    data () {
      return {
        swiperOption: {
          autoplay: 0,
          slidesPerView: 5,
          centeredSlides: true,
          spaceBetween: 20,
          direction: 'horizontal'
        }
      }
    },
    components: {
      'swiper': swiper,
      'swiper-slide': swiperSlide
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
