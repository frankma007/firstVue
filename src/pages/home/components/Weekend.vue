<template>
  <div>
    <div class="title">
      周末去哪儿
    </div>
    <ul>
      <li class="item" v-for="item of list" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="" />
        </div>

        <div class="item-info">
          <p class="item-title">
            {{ item.title }}
          </p>
          <p class="item-desc">
            {{ item.desc }}
          </p>
        </div>
      </li>
    </ul>
    recommend
  </div>
</template>
<script>
export default {
  name: "HomeWeekend",
  props: {
    list: Array
  },
  data: function() {
    return {
      // recommendList: [
      //   {
      //     id: "001",
      //     imgUrl:
      //       "https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
      //     title: "上海欢乐谷",
      //     desc:
      //       "景点浦江郊野公园浦江郊野公园奇迹花园浦江郊野公园奇迹花园浦江郊野公园奇迹花园浦江郊野公园奇迹花园奇迹花园门票"
      //   },
      //   {
      //     id: "002",
      //     imgUrl:
      //       "https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
      //     title: "上海欢乐谷2",
      //     desc:
      //       "2景点浦江郊野公园浦江郊野公园奇迹花园浦江郊野公园奇迹花园浦江郊野公园奇迹花园浦江郊野公园奇迹花园奇迹花园门票"
      //   },
      //   {
      //     id: "003",
      //     imgUrl:
      //       "https://imgs.qunarzz.com/sight/p0/1804/a7/a78d5d7a31a55d9ba3.img.jpg_200x200_4ebba6b4.jpg",
      //     title: "上海欢乐谷3",
      //     desc:
      //       "3景点浦江郊野公园浦江郊野公园奇迹花园浦江郊野公园奇迹花园浦江郊野公园奇迹花园浦江郊野公园奇迹花园奇迹花园门票"
      //   }
      // ]
    };
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/mixin.styl'
.title
  line-height:.8rem
  background:#eee
  text-indent:.2rem
  margin-top:.2rem
.item
  margin-bottom .1rem
  overflow :hidden
  .item-img-wrapper
    height:0
    overflow:hidden
    padding-bottom:37.09%
    .item-img
      width :100%
  .item-info
    padding:0 .1rem
    .item-title
      line-height .54rem
      font-size :.32rem
      ellipsis()
    .item-desc
      line-height .4rem
      color :#ccc
      ellipsis()
</style>
