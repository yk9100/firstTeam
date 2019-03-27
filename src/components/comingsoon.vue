<template>
  <div class="container">
      <p class="p1">近期最受期待</p>
	  <ul>
		  <li v-for="data in list" :key="data.id">
			  <img :src="data.img|newImg">
			  <p class='p2'>{{data.nm}}</p>
			  <p class='p3'>111</p>
		  </li>
	  </ul>
  </div>
</template>

<script>
  import Vue from 'vue'
  import axios from 'axios'
  
  Vue.filter('newImg',(data)=>{
	 return data.replace('w.h','170.230')
  })
  
  export default {
    data () {
      return {
        list: []
      }
    },
    name: 'nowplaying',
    props: {
      msg: String
    },
    mounted () {
      axios.get('/ajax/mostExpected?ci=65&limit=10&offset=0&token=').then((res)=>{
		  this.list = res.data.coming
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
*{
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}
	p.p1{
		line-height:40px;
	}
	ul{
		list-style: none;
		overflow: hidden;
		li{
			float: left;
			width:100px;
			height: 150px;
			img{
				width:100%;
			}
		}
	}
</style>