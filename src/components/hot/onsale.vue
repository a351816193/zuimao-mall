<template>
    <div class="onsale">
      <a class="onsale-main" href="">
          <span class="arrow"></span>
          <img src="../../assets/images/1.png"/>
      </a>
      <swiper id="onsale-list" class="swiper-container onsale-list">
        <swiper-slide>
          <a href="">

          </a>
        </swiper-slide>
      </swiper>
    </div>
</template>
<script type="text/javascript">
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    data() {

    },
    components: {
      'swiper': swiper,
      'swiper-slide': swiperSlide
    }
  }
</script>
<style lang="scss">
.onsale {
    margin-top: 10px;

    background-color: #fff;
    .onsale-list {
    }
        .onsale-main {
        font-size: 0;

        position: relative;

        width: 10.0rem;
        height: 4.533333rem;
        img {
            width: 100%;
        }
        .arrow {
            position: absolute;
            bottom: 0;
            left: calc(50% - .133333rem);

            width: .266667rem;
            height: .16rem;

            background-image: url('../../assets/images/arrow.png');
            background-repeat: no-repeat;
            background-size: .266667rem .16rem;
        }
    }
}
</style>
