<template>
  <div>
    <home-header :city="city"></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icon :list="iconList"></home-icon>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>
<script>
import axios from "axios";
import HomeHeader from "./components/Header.vue";
import HomeSwiper from "./components/Swiper.vue";
import HomeIcon from "./components/Icon.vue";
import HomeRecommend from "./components/Recommend.vue";
import HomeWeekend from "./components/Weekend.vue";
export default {
  name: "Home",
  data: function() {
    return {
      city: "",
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    };
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcon,
    HomeRecommend,
    HomeWeekend
  },
  methods: {
    getHomeInfo() {
      axios.get("/api/index.json").then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc(res) {
      console.log(res);
      this.city = res.data.data.city;
      this.swiperList = res.data.data.swiperList;
      this.iconList = res.data.data.iconList;
      this.recommendList = res.data.data.recommendList;
      this.weekendList = res.data.data.weekendList;
    }
  },
  mounted() {
    this.getHomeInfo();
  }
};
</script>
<style scoped></style>
