<template>
	<div class="container" v-on:click="handleGallaryClick">
    <div class="wrapper">
      <swiper  :options="swiperOption">
        <swiper-slide v-for="(item,index) in imgs" :key="index" >
          <img class="gallary-img" :src="item"  alt="" />
        </swiper-slide>        
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>    
	</div>
</template>
<script>
	export default {
    name: "CommonGallary",
    props:{
      imgs:{
        type:Array,
        default:function(){
          return 
          [
            // 'http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_r_800x800_d6a63068.jpg',
            // 'http://img1.qunarzz.com/sight/p0/1908/53/5339e93a25e221a2a3.img.jpg_r_800x800_f807e948.jpg'
          ]
        }
      }
    },
    data:function(){
      return {
        swiperOption: {
            pagination: '.swiper-pagination',
            paginationType: 'fraction',
            observeParents:true,
            observer:true
          }
      }
    },
    methods:{
      handleGallaryClick(){
        this.$emit("close")
      }
    }
	}
</script>
<style lang="stylus" scoped>
.container >>> .swiper-wrapper 
  overflow:inherit
.container >>> .swiper-container 
  overflow: inherit   
.container
  position:fixed 
  left :0 
  top:0 
  right:0
  bottom:0
  z-index :99 
  background:#000 
  display:flex 
  flex-direction:column 
  justify-content:center 
  .wrapper
    width:100% 
    height :0 
    // overflow:hidden 
    padding-bottom:100% 
    .gallary-img
      width:100% 
    .swiper-pagination
      color:#fff
      bottom:-1rem

</style>
