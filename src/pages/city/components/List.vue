<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-top-bottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-top-bottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hot" :key="item.id">
            <div class="button" v-on:click="handleCityClick(item.name)">{{ item.name }}</div>
          </div>
        </div>
      </div>

      <div class="area" v-for="(alpha, key) of cities" :key="key" :ref="key">
        <div class="title">{{ key }}</div>
        <div class="item-list">
          <div class="item border-bottom" v-for="city of alpha" :key="city.id" v-on:click="handleCityClick(city.name)">
            {{ city.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
import {mapState,mapMutations} from 'vuex'
export default {
  name: "CityList",
  props: {
    cities: Object,
    hot: Array,
    letter: String
  },
  methods:{
    handleCityClick(city){
      // console.log(city)
      // this.$store.commit('changeCity',city)
      this.changeCity(city)
      this.$router.push("/")
    },
    ...mapMutations(['changeCity'])
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  watch: {
    letter() {
      console.log(this.letter);
      if (this.letter) {
        const element = this.$refs[this.letter][0];
        console.log(element);
        this.scroll.scrollToElement(element);
      }
    }
  },
  computed:{   
    ...mapState(['city'])
    
  }
};
</script>
<style lang="stylus" scoped>
.list
  position: absolute
  top:1.58rem
  left:0
  right:0
  bottom:0
  overflow:hidden
  .border-top-bottom
    &:before
      border-color:#ccc
    &:after
      border-color:#ccc
  .title
    line-height:.44rem
    background:#eee
    padding-left:.2rem
    color:#666
    font-size:.26rem
  .button-list
    padding:.1rem .6rem .1rem .1rem
    overflow hidden
    .button-wrapper
      float:left
      width:33.33%
      .button
        margin:.1rem
        text-align:center
        border:.02rem solid #ccc
        padding:.1rem 0
        border-radius:.06rem
  .item-list
    .item
      line-height :.76rem
      padding-left:.2rem
    .border-bottom
    &:before
      border-color:#ccc
</style>
