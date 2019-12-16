<template>
  <div>
    <div class="title">
      热销推荐
    </div>
    <ul>
      <li class="item" v-for="item of list" :key="item.id">
        <img class="item-img" :src="item.imgUrl" alt="" />

        <div class="item-info">
          <p class="item-title">
            {{ item.title }}
          </p>
          <p class="item-desc">
            {{ item.desc }}
          </p>
          <button class="button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "HomeRecommend",
  props: {
    list: Array
  },
  data: function() {
    return {};
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
  display:flex
  overflow :hidden
  height:1.9rem
  .item-img
    height :1.7rem
    width :1.7rem
    padding :.1rem
  .item-info
    flex:1
    min-width:0
    padding :.1rem
    .item-title
      line-height .54rem
      font-size :.32rem
      ellipsis()
    .item-desc
      line-height .4rem
      color :#ccc
      ellipsis()
    .button
      background :#ff9300
      border-redus: 0.06rem
      padding:0 .1rem
      max-resolution top 0.2rem
      color:#fff
</style>
