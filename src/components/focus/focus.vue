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
.focus
{
    .swiper-slide
    {
        font-size: 18px;
        /* Center slide text vertically */

        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display:         flex;

        text-align: center;

        background: #fff;

        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
                justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
                align-items: center;
        img
        {
            width: 100%;
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
