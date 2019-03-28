<template>
	<div class="theaters">
		
		<div class="navbar">
			<!-- 回退按钮 -->
			<div class="nav-wrap-left"><i class="icon-back"></i></div>
			<h1>{{topic.nm}}</h1>
		</div>

		<div class="movie-detail">
			<div class="movie-filter"></div>
			<div class="poster-bg">
				<!-- <img :src="replaceStr(topic.img)" alt=""> -->
			</div>
			<!-- http://p1.meituan.net/71.100/movie/94b9bfc5ffeea6d6e362395992f547762041095.jpg -->
			<div class="detail">
				<div class="poster"><img src="" alt=""></div>
				<div class="content"></div>
			</div>
			<div class="arrow-g"></div>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'
	import axios from 'axios'
	// Vue.directive('style',{
	// 	inserted: function(el,aaa){
	// 		console.log(aaa.value)
			
	// 	}
	// })
	export default {
		data(){
			return{
				// 接收到的电影id
				filmid: this.$route.params.filmId,
				topic: {},
			}
		},
		methods:{
	      replaceStr (str) {
	        return str.replace(/w.h/, '71.100')
	      }
		},
		mounted () {
			this.$store.commit("hideTabbar");
			axios.get(`/ajax/detailmovie?movieId=${this.filmid}`).then((res)=>{
				//console.log(res.data.detailMovie)
				this.topic = res.data.detailMovie
				console.log(this.topic.img)
				
			})
		}
	}
</script>

<style lang="scss" scoped>
	*{
		box-sizing: border-box;
	}
	/* top */
	.navbar{
		position: relative;
	    color: #fff;
	    width: 100%;
	    height: 50px;
		background: #e54847;
		overflow: hidden;
		user-select: none;
		-webkit-user-select: none;
	
		.nav-wrap-left{
			position: absolute;
			top: 0;
			left: 0;
			margin-left: 10px;
		 	padding: 0 10px;
			width: 45px;
			height: 50px;
			text-align: center;
			line-height: 54px;

			i{
				display: inline-block;
				width: 16px;
				height: 16px;
				border-bottom: 2px solid #fff;
				border-left: 2px solid #fff;
				-webkit-transform: rotate(45deg);
				transform: rotate(45deg);
			}
		}
		
		h1{
			width: 80%;
			margin: 0 auto;
		    font-size: 18px;
		    font-weight: 400;
		    text-align: center;
		    line-height: 50px;
		    text-overflow: ellipsis;
		    white-space: nowrap;
		    overflow: hidden;
		}
	}

	/* body */
	.movie-detail{
    	position: relative;
    	width: 100%;
		height: 188px;
    	cursor: pointer;

		.movie-filter {
			position: absolute;
			z-index: -1;
			width: 100%;
			height: 100%;
			background-color: #333;
		}

		.poster-bg{

		}
	}

</style>