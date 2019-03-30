<template>
	<div>
		<header>
			<a href="javascript:history.go(-1);">
				<van-icon name="arrow-left" />
			</a>	
			<p>
				<span>我的电影订单</span>
			</p>
			<div class="hidebox"></div>
		</header>
	</div>
</template>


<script>
	
	export default {

	}
</script>


<style lang="scss" scoped>
	header {
		width: 100%;
		height: 50px;
		background: #DF2D2D;
		display: flex;
		a {
			display: block;
			line-height: 50px;
			width: 50px;
			text-align: center;
			i {
				font-size: 25px;
				line-height: 50px;
				color: #fff;
			}
		};
		a:hover {
			opacity: .1;
			background: black;
		}
		p {
			flex: 1;
			span {
				display: block;
				line-height: 50px;
				text-align: center;
				font-size: 18px;
				color: #fff;
			}
		}
		.hidebox {
			width: 50px;
			height: 100%;
			background: #DF2D2D; 
		}
	}

</style>