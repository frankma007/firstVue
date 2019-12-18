<template>
  <div class="header">
    <div class="header-left"><i class="iconfont back-icon">&#xe628;</i></div>
    <div class="header-input">
      <i class="iconfont ">&#xe648;</i>输入城市景点游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{ this.city }}<i class="iconfont arrow-icon">&#xe662;</i>
      </div>
    </router-link>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: "HomeHeader",
  props: {
    // city: String
  },
  computed:{
    ...mapState(['city'])
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
  display:flex
  background:$bgColor
  line-height:$headerHeight
  color:#fff
  .header-left
    width:.64rem
    text-align:center
    float :left
    .back-icon
      font-size:.4rem
  .header-input
    padding-left:.2rem
    flex:1
    background:#fff
    border-radius:.1rem
    margin-top:.12rem
    height:.64rem
    line-height .64rem
    margin-left:.2rem
    color:#ccc

  .header-right
    color:#fff
    min-width:1.04rem
    padding:0 .1rem
    float:right
    text-align:center
    .arrow-icon
      font-size:.2rem
      margint-left:-.04rem
</style>
