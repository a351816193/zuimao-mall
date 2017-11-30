<template>
      <swiper class="focus" id="focus" :options="swiperOption">
          <swiper-slide><img class="lazy" src="./../../assets/images/1.png" alt=""></swiper-slide>
          <swiper-slide><img class="lazy" src="./../../assets/images/1.png" alt=""></swiper-slide>
          <swiper-slide><img class="lazy" src="./../../assets/images/1.png" alt=""></swiper-slide>
          <swiper-slide><img class="lazy" src="./../../assets/images/1.png" alt=""></swiper-slide>
          <swiper-slide><img class="lazy" src="./../../assets/images/1.png" alt=""></swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
</template>
<script type="text/javascript">
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'focus',
  data () {
    return {
      swiperOption: {
        autoplay: 0,
        slidesPerView: 'auto',
        direction: 'horizontal',
        pagination: '.swiper-pagination'
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
@import './../../common/swiper-3.4.2.min.css';
@import './../../common/sass/global.scss';
.focus
{
    .swiper-slide
    {
        width: 10rem;
        height: 4.33333rem;
      img
      {
        width: 100%;
        height: 100%;
      }
    }
    .swiper-pagination-bullet-active
    {
        width: 16px;
        border-radius: 3px;
        background: #fff;
    }
}
</style>
