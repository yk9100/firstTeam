<template>
  <div class="movie">
  	<div class="sub-nav">
		<router-link to="/Movie/nowplaying" activeClass="select">正在热映</router-link>
		<router-link to="/Movie/comingsoon" activeClass="select">即将上映</router-link>
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
		components:{
			nowplaying,
			comingsoon
		}
	};
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

	.sub-nav {
		display: flex;

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
</style>
