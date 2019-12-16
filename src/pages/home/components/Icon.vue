<template>
  <div>
    <div class="icons">
      <swiper>
        <swiper-slide
          :options="swiperOption"
          v-for="(pageList, index) of pages"
          :key="index"
        >
          <div class="icon" v-for="item of pageList" :key="item.id">
            <div class="icon-img">
              <img class="icon-img-content" :src="item.imgUrl" alt="" />
            </div>
            <p class="icon-desc">{{ item.desc }}</p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="icon">
            <div class="icon-img">
              <img
                class="icon-img-content"
                src="https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
                alt=""
              />
            </div>
            <p class="icon-desc">景点门票</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeIcon",
  data: function() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        autoplay: false
      },
      iconList: [
        {
          id: "001",
          imgUrl:
            "https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          desc: "景点门票"
        },
        {
          id: "002",
          imgUrl:
            "https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/3ef092d0a89ffddb7f781cda30c8ae49.png",
          desc: "滑雪季"
        },
        {
          id: "003",
          imgUrl:
            "https://imgs.qunarzz.com/piao/fusion/1803/ea/01d081dacb03cc02.png",
          desc: "赏秋色"
        },
        {
          id: "004",
          imgUrl:
            "https://imgs.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
          desc: "一日游"
        },
        {
          id: "005",
          imgUrl:
            "https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          desc: "景点门票"
        },
        {
          id: "006",
          imgUrl:
            "https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/3ef092d0a89ffddb7f781cda30c8ae49.png",
          desc: "滑雪季"
        },
        {
          id: "007",
          imgUrl:
            "https://imgs.qunarzz.com/piao/fusion/1803/ea/01d081dacb03cc02.png",
          desc: "赏秋色"
        },
        {
          id: "008",
          imgUrl:
            "https://imgs.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
          desc: "一日游"
        },
        {
          id: "009",
          imgUrl:
            "https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/3ef092d0a89ffddb7f781cda30c8ae49.png",
          desc: "动植物园动植物园动植物园动植物园动植物园"
        }
      ]
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.iconList.forEach((item, index) => {
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
