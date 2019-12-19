// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import store from './store/index.js'
import router from './router'
import "babel-polyfill";
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import fastclick from 'fastclick'
// 引入vue-awesome-swiper轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles轮播图样式
import 'swiper/dist/css/swiper.css'
// 使用插件 可以跟默认参数
Vue.use(VueAwesomeSwiper /* { default global options } */)
Vue.config.productionTip = false
fastclick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})