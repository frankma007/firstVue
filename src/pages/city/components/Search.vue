<template>
	<div>
		<div class="search">
			<input v-model="keyword"
						 class="search-input"
						 type="text"
						 placeholder="输入城市名或拼音" />
		</div>
		<div class="search-content" ref="search" v-show="keyword">
			<ul>
				<li class="search-item border-bottom" 
            v-for="item of list"
						:key="item.id" v-on:click="handleCityClick(item.name)">
          {{item.name}}
        </li>
        <li v-show="hasNoData" class="search-item border-bottom">没有找到匹配数据</li>
			</ul>
		</div>
	</div>
</template>
<script>
import Bscroll from "better-scroll"
import {mapMutations}from 'vuex'
	export default {
		name: "CitySearch",
		props: {
			cities: Object
		},
		data: function () {
			return {
				keyword: '',
				list: [],
        timer: null,
        // scroll:null
			}
    },
    methods:{
      handleCityClick(city){
        // console.log(city)
        // this.$store.commit('changeCity',city)
        this.changeCity(city)
        this.$router.push("/")
      },
      ...mapMutations(['changeCity'])
    },
    mounted(){
this.scroll =new Bscroll(this.$refs.search)
    },
    computed:{
      hasNoData(){
        return !this.list.length
      }
    },
		watch: {
			keyword () {
        if(!this.keyword){
          this.list=[]
          return
        }
				//节流
				if (this.timer) {
					clearTimeout(this.timer)
        }
    
				this.timer = setTimeout(() => {
					const result = []
					for (let i in this.cities) {
						this.cities[i].forEach((value) => {
							if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
								result.push(value)
							}
						})
					}
					this.list = result
				}, 100);
			}
		}
	};
</script>
<style lang="stylus" scoped>
@import "~styles/varibles.styl"
.search
  height :.72rem
  background:$bgColor
  padding:0 .1rem
  .search-input
    height: 0.62rem
    line-height:.62rem
    width:100%
    text-align:center
    border-radius:.06rem
    color:#666
    padding:0 .1rem
    box-sizing:border-box
.search-content
  position:absolute
  top:1.58rem 
  left:0 
  right:0 
  bottom:0 
  z-index :1 
  background :#eee 
  overflow:hidden
  .search-item
    line-height:.62rem 
    padding-left:.2rem
    color:#666 
    background:#fff
</style>
