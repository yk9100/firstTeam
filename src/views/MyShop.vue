<template>
	<div>
		<!-- title -->
		<header>
			<a href="javascript:history.go(-1);">
				<van-icon name="arrow-left" />
			</a>	
			<p class="titlebar">
				<span>喵的周边商品</span>
			</p>
			<div class="hidebox"></div>
		</header>
		<div class="pics">
			<img src="/miaoyan.jpg" alt="">
		</div>
		<p class="nogoods">您最近没有新订单，赶快去下一单吧，喵~</p>

	</div>
</template>

<script>
	export default {

	};
</script>

<style lang="scss" scope>
	* {
		margin: 0;
		padding: 0;
	}

	html, body {
		width: 100%;
		height: 100%;
		display: fixed;
	}

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
	}
	.titlebar {
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

	.pics {
		width: 150px;
		height: 150px;
		position: absolute;
		top: 45%;
		left: 50%;
		transform: translate(-50%, -50%);
		img {
			width: 150px;
		}
	}
	.nogoods {
		width: 80%;
		position: absolute;
		top: 60%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
</style>