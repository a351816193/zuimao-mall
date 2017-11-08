<template>
  <swiper  id="hot-time-nav" class="swiper-wrapper hot-time-nav" :options="swiperOption">
      <swiper-slide class="nav-item"><a href=""><i class="time">昨日</i><br><span class="statu">别错过</span></a></swiper-slide>
      <swiper-slide class="nav-item"><a href=""><i class="time">20:00</i><br><span class="statu">昨日精选</span></a></swiper-slide>
      <swiper-slide class="nav-item"><a href=""><i class="time">21:00</i><br><span class="statu">昨日精选</span></a></swiper-slide>
      <swiper-slide class="nav-item"><a href=""><i class="time">09:00</i><br><span class="statu">抢购中</span></a></swiper-slide>
      <swiper-slide class="nav-item"><a href=""><i class="time">10:00</i><br><span class="statu">抢购中</span></a></swiper-slide>
      <swiper-slide class="nav-item"><a href=""><i class="time">11:00</i><br><span class="statu">抢购中</span></a></swiper-slide>
      <swiper-slide class="nav-item"><a href=""><i class="time">12:00</i><br><span class="statu">抢购中</span></a></swiper-slide>
      <swiper-slide class="nav-item"><a href=""><i class="time">14:00</i><br><span class="statu">抢购中</span></a></swiper-slide>
      <swiper-slide class="nav-item"><a href=""><i class="time">16:00</i><br><span class="statu">抢购中</span></a></swiper-slide>
      <swiper-slide class="nav-item"><a href=""><i class="time">19:00</i><br><span class="statu">抢购中</span></a></swiper-slide>
      <swiper-slide class="nav-item"><a href=""><i class="time">20:00</i><br><span class="statu">抢购中</span></a></swiper-slide>
      <swiper-slide class="nav-item"><a href=""><i class="time">21:00</i><br><span class="statu">抢购中</span></a></swiper-slide>
      <swiper-slide class="nav-item"><a href=""><img class="tomorrow" src="images/tomorrow.png"></a></swiper-slide>
  </swiper>
</template>
<script type="text/javascript">
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'menu_nav',
  data () {
    return {
      swiperOption: {
        autoplay: 0,
        slidesPerView: 5,
        slidesPerGroup: 5,
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
