<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide class="menu-item active"><router-link to="/hot">进口红酒</router-link></swiper-slide>
      <swiper-slide class="menu-item"><router-link to="/hot">进口红酒</router-link></swiper-slide>
      <swiper-slide class="menu-item"><router-link to="/hot">进口红酒</router-link></swiper-slide>
      <swiper-slide class="menu-item"><router-link to="/hot">进口红酒</router-link></swiper-slide>
      <swiper-slide class="menu-item"><router-link to="/hot">进口红酒</router-link></swiper-slide>
      <swiper-slide class="menu-item"><router-link to="/hot">进口红酒</router-link></swiper-slide>
    </swiper>
    <router-view></router-view>
  </div>

</template>
<style lang="scss">
@import './../../common/sass/global.scss';
@import './../../common/swiper-3.4.2.min.css';
.nav-menu
{

    width: 100%;
    .menu-item
    {
        font-size: 14px;
        width: 20%;
        text-align: center;
        a
        {
            line-height: 1.2rem;

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
