<template>
  <div>
    <div class="icons">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(pageList, index) of pages" :key="index">
          <div class="icon" v-for="item of pageList" :key="item.id">
            <div class="icon-img">
              <img class="icon-img-content" :src="item.imgUrl" alt="" />
            </div>
            <p class="icon-desc">{{ item.desc }}</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeIcon",
  props: {
    list: Array
  },
  data: function() {
    return {
      swiperOption: {
        // pagination: ".swiper-pagination",
        autoplay: false
      }
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixin.styl'
  .icons >>> .swiper
    padding-bottom:50%
    height:0
  .icons
    margin-top:.2rem
    .icon
      float:left
      width:25%
      height:0
      padding-bottom:25%
      overflow :hidden
      // display:block
      position:relative
      .icon-img
        position:absolute
        left:0
        top:0
        right:0
        bottom:.44rem
        box-size :border-box
        padding:.1rem;
        .icon-img-content
          height:100%
          display:block
          margin:0 auto
      .icon-desc
        position:absolute
        left:0
        bottom:0
        right:0
        height:.44rem
        color :$darkTextColor
        text-align:center
        ellipsis()
</style>
