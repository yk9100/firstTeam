<template>
  <div class="movie">
  	<div class="main-top">
	  	<div class="slogan">{{slogan}}</div>
	  	<div class="sub-nav">
			<router-link to="/Movie/nowplaying" activeClass="select">正在热映</router-link>
			<router-link to="/Movie/comingsoon" activeClass="select">即将上映</router-link>
	  	</div>
  	</div>
  	<div class="filmlist">
  		<router-view></router-view>
  	</div>
  </div>
</template>
<script>
	import nowplaying from '../components/nowplaying'
	import comingsoon from '../components/comingsoon'
	export default {
		data () {
			return{
				slogan: '喵眼电影'
			}
		},
		components:{
			nowplaying,
			comingsoon
		}
	}
</script>
<style lang="scss" scoped>
	*{
		box-sizing: border-box;
	}

	a{
		color: #333;
		font-size: 14px;
		text-decoration: none;
	}

	ul{
		li{
			list-style: none;
		}
	}
	.movie{
		padding-top: 100px;
	}
	.main-top{
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 999;

		.slogan{
			height: 50px;
			color: #fff;
			font-size: 18px;
			font-weight: 400;
			text-align: center;
			line-height: 50px;
			background: #e54847;
		}

		.sub-nav {
			display: flex;
			background: #fff;
			a{
				flex: 1;
				font-size: 14px;
				text-align: center;
				line-height: 45px;
				border-bottom: 1px solid #ccc;
			}

			a.select{
				color: #ef4238;
				border-bottom: 1px solid #ef4238;
			}
		}
	}
</style>
