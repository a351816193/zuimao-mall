<template>
  <swiper :options="swiperOption">
      <swiper-slide class="menu-item active"><a href="#">进口红酒</a></swiper-slide>
      <swiper-slide class="menu-item"><a href="#">进口红酒</a></swiper-slide>
      <swiper-slide class="menu-item"><a href="#">进口红酒</a></swiper-slide>
      <swiper-slide class="menu-item"><a href="#">进口红酒</a></swiper-slide>
      <swiper-slide class="menu-item"><a href="#">进口红酒</a></swiper-slide>
      <swiper-slide class="menu-item"><a href="#">进口红酒</a></swiper-slide>
  </swiper>
</template>
<style lang="scss">
@import './../../common/sass/global.scss';
@import './../../common/swiper-3.4.2.min.css';
.nav-menu
{

    width: 100%;
    overflow: hidden;
    .menu-item
    {
        font-size: 14px;
        width: 1.333333rem;
        text-align: center;
        a
        {
            line-height: .6rem;

            display: inline-block;

            padding: 0 .133333rem;

            text-align: center;

            color: #4b4b4b;
        }
        &.active a
        {
            color: $primarycolor;
            border-bottom: 2px solid $primarycolor;
        }
    }

}
</style>
<script type="text/javascript">
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'menu_nav',
  data () {
    return {
      swiperOption: {
        autoplay: 0,
        slidesPerView: 'auto',
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
