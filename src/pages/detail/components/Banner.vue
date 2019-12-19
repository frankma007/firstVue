<template>
  <div>
    <div class="banner" v-on:click="handleBannerClick">
      <img class="banner-img" :src="img" alt="">
      <div class="banner-info">
        <div class="banner-tittle">
          {{name}}
        </div>
        <div class="banner-number">
          <i class="iconfont banner-icon">&#xe63b;</i>{{imgList.length}}
        </div>
      </div>
    </div>
    <common-gallary v-on:close="handleGallaryClose" :imgs="imgList" v-show="showGallary"></common-gallary>
  </div>
</template>
<script>
import CommonGallary from 'common/gallary/Gallary.vue'
	export default {
    name: "Banner",
    props:{
      name:String,
      img:String,
      imgList:Array
    },
    components:{
      CommonGallary
    },
    data:function(){
      return{
        // imgs:[],
        showGallary:false
      }
    },
    methods:{
      handleBannerClick(){
        this.showGallary=true
      },
      handleGallaryClose(){
        this.showGallary=false
      }
    }
	};
</script>
<style lang="stylus" scoped>
.banner
  overflow:hidden 
  height:0
  padding-bottom:55% 
  position:relative 
  .banner-img 
    width:100%
  .banner-info
    color:#fff
    position:absolute 
    left:0 
    right:0 
    bottom:0
    line-height:.6rem 
    display:flex 
    background-image: linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.8))
    .banner-tittle 
      flex:1 
      font-size:.32rem 
      padding:0 .2rem
    .banner-number 
      padding:0 .4rem 
      height:.32rem 
      line-height:.32rem 
      border-radius:.2rem 
      background:rgba(0,0,0,.8)
      font-size:.24rem
      margin-top:.14rem 
      .banner-icon 
        font-size:.24rem 
</style>
