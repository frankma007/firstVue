<template>
  <div class="wrapper">
    <swiper :options="swiperOption" >      
      <swiper-slide v-for="item of swiperList" :key="item.id" >
        <img class="swiper-img" :src="item.imgUrl" alt="" />
      </swiper-slide>      
      <div class="swiper-pagination"  slot="pagination"></div>     
    </swiper>
	</div>
</template>
<script>
export default {
   
    name: 'HomeSwiper',
    data: function() {
      return {
        swiperOption: {       
          pagination: '.swiper-pagination',
          loop:true
        },
        swiperList:[
          {
            id:'0001',
            imgUrl:'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201911/4d9e45775ba63057e10f3c4d9d7b8cdd.jpg_750x200_345d57f5.jpg'
          },{
            id:'0002',
            imgUrl:'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201911/15f7901482e5a0b40d5cc8d38ce1dbae.jpg_750x200_033a5b46.jpg'
          }
        ]
      }
    }

}
</script>
<style lang="stylus" scoped>
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 28.25%
    background: #eee
    .swiper-img
      width: 100%
  .wrapper>>>.swiper-pagination-bullet-active
    background:#fff
</style>