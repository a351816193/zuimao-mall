<template>
  <div>
    <v-focus></v-focus>
    <v-adv></v-adv>
    <hot-time-nav></hot-time-nav>
  </div>
</template>
<script type="text/javascript">
import focus from '../focus/focus.vue'
import adv from '../adv/adv.vue'
import hot_time_nav from './hot_time_nav.vue'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  data () {
    return {
      isFixed: false,
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
    'v-focus': focus,
    'v-adv': adv,
    'hot-time-nav': hot_time_nav,
    'swiper': swiper,
    'swiper-slide': swiperSlide
  },
  computed: {
    fixedNav () {

    }
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
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display:         flex;

        text-align: center;

        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
                justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
                align-items: center;
    }
    a
    {
        font-size: 20px;
        height: 0.533333rem;
        padding: .133333rem;

        text-align: center;

        color: #4d4d4d;
    }
    .tomorrow
    {
        width: 50px;
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
</style>
