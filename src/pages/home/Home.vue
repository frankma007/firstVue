<template>
  <div>
    <home-header></home-header>
    hello world 首页

  </div>
  
</template>
<script>
import HomeHeader from './components/Header.vue'
export default {
  name: 'Home',
  components:{
    HomeHeader
  },

}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* .home{
    font-size:50px;
  } */
</style>
