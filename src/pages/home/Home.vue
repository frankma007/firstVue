<template>
  <div>
    <home-header ></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icon :list="iconList"></home-icon>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>
<script>
import {mapState} from 'vuex'
import axios from "axios"
// import HomeHeader from "./components/Header.vue"
import HomeSwiper from "./components/Swiper.vue"
import HomeIcon from "./components/Icon.vue"
import HomeRecommend from "./components/Recommend.vue"
import HomeWeekend from "./components/Weekend.vue"
export default {
  name: "Home",
  data: function() {
    return {
      lastCity: "",
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  components: {
    //异步加载header组件
    HomeHeader:()=>import('./components/Header.vue'),
    HomeSwiper,
    HomeIcon,
    HomeRecommend,
    HomeWeekend
  },
  methods: {
    getHomeInfo() {
      axios.get("/api/index.json?city="+this.city).then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res) {     
      // this.city = res.data.data.city
      this.swiperList = res.data.data.swiperList
      this.iconList = res.data.data.iconList
      this.recommendList = res.data.data.recommendList
      this.weekendList = res.data.data.weekendList
    }
  },
  mounted() {
    console.log("mounted")
    this.getHomeInfo()
    this.lastCity =this.city
  },
  computed:{
    ...mapState(['city'])
  },
  activated(){
    if(this.lastCity !== this.city){
      this.lastCity = this.city
      this.getHomeInfo()
    }
    console.log("activated")
  }
}
</script>
<style scoped></style>
