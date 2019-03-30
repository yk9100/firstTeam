<template>
	<div>
		<header>
			<div class="hidebox" diabled></div>
			<span>喵眼电影</span>
			<div class="hidebox"
			@click="logout">退出</div>
		</header>

		<div id="bgc-banner">
			<img src="/avatar.jpg">
		</div>

		<div id="my-order">
			<span class="order-title">我的订单</span>
			<div class="lists">
				<a href="#/myorder" class="lists-one">
					<van-icon name="video" />
					<p>电影</p>
				</a>
				<a href="#/myshop" class="lists-two">
					<van-icon name="shop-collect" />
					<p>商城</p>
				</a>
			</div>
		</div>

		<div class="items">
			<a href="#/movieonline">
				<span>在线观影</span>
				<van-icon name="arrow" />
			</a>
		</div>
		<div class="items">
			<a href="#/mytickets">
				<span>优惠劵</span>
				<van-icon name="arrow" />
			</a>
		</div>
		<div class="items">
			<a href="#/mycards">
				<span>折扣卡</span>
				<van-icon name="arrow" />
			</a>
		</div>		
	</div>
</template>

<script>
	import Vue from 'vue';
	import Vant from 'vant';
	import 'vant/lib/index.css';

	Vue.use(Vant);
	
	export default {
		data () {
			return {

			}
		},

		methods: {
			logout() {
				this.$router.push('/movie/nowplaying');
			}
		}

	};
</script>

<style lang="scss" scoped>
	* {
		margin: 0;
		padding: 0;
	}

	html, body {
		width: 100%;
		height: 100%;
	}

	header {
		width: 100%;
		height: 50px;
		background: #E64C46;
		text-align: center;
		display: flex;
		span {
			flex: 1;
			width: 100%;
			display: block;
			height: 50px;
			line-height: 50px;
			color: #fff;
			font-size: 18px;
		}
		.hidebox {
			height: 50px;
			line-height: 50px;
			text-align: center;
			background: #E64C46;
			font-size: 14px;
			width: 50px;
			height: 50px;
			color: #f3f3f3;
		}
	}

	#bgc-banner {
		width: 100%;
		height: 150px;
		background-color: #E64C46;
		position: relative;
	    img {
	    	border-radius: 50%;
			width: 60px;
			height: 60px;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			border: 3px solid #fff;
	    }
	}

	#my-order {
		width: 100%;
		height: 150px;
		margin-top: 10px;
		.order-title {
			display: block;
			height: 25px;
			text-align: center;
			padding-top: 5px;
		}
		.lists {
			width: 100%;
			height: 120px;
			display: flex;
			a {
				display: block;
				flex: 1;
				color: #e54847;
				i {
					width: 50px;
					height: 50px;
					font-size: 50px;
					margin-left: 70px;
					margin-top: 15px;
				}
				p {
					height: 20px;
					width: 50px;
					text-align: center;
					margin-left: 70px;
				}
			}
		}
	}

	.items {
		width: 100%;
		height: 40px;
		border-bottom: 1px solid #ccc;
		a {	
			display: block;
			height: 40px;
			line-height: 40px;
			display: flex;
			justify-content: space-between;
			padding: 2px 10px;
			color: #333;
			span {
				display: block;
				font-size: 15px;
			}
			i {
				font-size: 18px;
				height: 40px;
				line-height: 40px;
				color: #333;
			}
		}
	}
	
</style>