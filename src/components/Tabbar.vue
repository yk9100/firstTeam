<template>
	<footer>
		<ul>
			<router-link to="/Movie" activeClass="active" tag="li">电影</router-link>
			<router-link to="/Cinema" activeClass="active" tag="li">影院</router-link>
			<router-link to="/Center" activeClass="active" tag="li">我的</router-link>
		</ul>

	</footer>
</template>
<script>
	export default {

	}
</script>
<style lang="scss" scoped>
	.active{
		color:#f03d37;
	}
	footer{
		border-top:1px solid #ccc;
		position: fixed;
		left:0;
		bottom:0;
		width: 100%;
		height:48px;
		background: white;

		z-index: 999;

		ul{
			list-style:none;
			width: 100%;
		    height:48px;
		    display: flex;
		    li{
		    	height: 48px;
		    	flex:1;
		    	text-align: center;
		    	line-height: 48px;
		    }
		}
	}
</style>