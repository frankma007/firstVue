<template>
	<div>   
    <detail-banner :name="sightName" :img="bannerImg" :imgList="gallaryImgs"></detail-banner>
    <detail-header></detail-header>    
    <detail-list :list="categoryList"></detail-list>
   
	</div>
</template>
<script>
import DetailBanner from'./components/Banner.vue'
import DetailHeader from'./components/Header.vue'
import DetailList from'./components/List.vue'
import axios from 'axios'
	export default {
    name: "Detail",
    components:{
      DetailBanner,
      DetailHeader,
      DetailList
    },
    data:function() {
      return{
        // list:[
        //   {title:"成人票",
        //     "children":[{title:"成人三馆联票","children":[{title:"成人三馆联票第五门店"},{title:"成人三馆联票第五门店"}]
        //       },{title:"成人五馆联票"}]},
        //   {title:"学生票",
        //    "children":[{title:"学生三馆联票"},{title:"学生五馆联票"}]},
        //   {title:"儿童票",
        //   "children":[{title:"学生1三馆联票"},{title:"学生2五馆联票"}]}
        // ],
        sightName:"",
        bannerImg:"",
        gallaryImgs:[],
        categoryList:[]
      }
    },
    methods:{
      getDetailInfo(){
        // axios.get("/api/detail.json?id="+this.$route.params.id)
        axios.get("/api/detail.json",{
          id:this.$route.params.id
        }).then(this.handleGetDataSucc)
      },
      handleGetDataSucc(res){
        res =res.data
        if(res.ret && res.data){
          const data =res.data
          console.log(data)
          this.sightName=data.sightName
          this.bannerImg=data.bannerImg
          this.gallaryImgs=data.gallaryImgs
          this.categoryList=data.categoryList
        }
      }
    },
    mounted(){
      this.getDetailInfo()
    }
	}
</script>
<style lang="stylus" scoped>

</style>
