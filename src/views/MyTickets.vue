<template>
	<div>
		<!-- title -->
		<header>
			<a href="javascript:history.go(-1);">
				<van-icon name="arrow-left" />
			</a>	
			<p class="titlebar">
				<span>我的优惠劵</span>
			</p>
			<div class="hidebox"></div>
		</header>

		<div class="ticket-type">
			<div class="ticket-infor">	
				<van-cell-group >
				  <van-field v-model="value" placeholder="请输入优惠劵密码"/>
				</van-cell-group>
				<a href="javascript:;">添加</a>
			</div>
		</div>

		<ul class="orderlist">
			<li v-for="(item, index) in items" class="orderlist-items">
				<div class="tickets-left">
					<div class="num-top">
						<span>{{item.value}}</span>
						<span>元</span>
					</div>
					<div class="num-bottom">
						<span>代金券</span>
					</div>
				</div>
				<div class="tickets-right">
					<div class="red-bag">{{item.title}}</div>
					<div class="bag-infor">{{item.limitDesc}}</div>
					<div class="bag-end">已过期</div>
					<div class="bag-time">{{item.rangeTime}}</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import Vue from 'vue';
	import Vant from 'vant';
	import 'vant/lib/index.css';
	import axios from 'axios';

	Vue.use(Vant);

	export default {
		data () {
			return {
				items: [],
				value:'',
			}
		},

		mounted () {
			axios({
				type: 'get',
				url: '/tickets.json',
			}).then(res=>{
				this.items = res.data.couponlist;
				console.log(this.items);

			})
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

	.ticket-type {
		width: 80%;
		height: 49px;
		.ticket-infor {
			display: flex;
			justify-content: space-around;
			input {

			border-radius: 5px;
			height: 90%;
			margin-top: 10px;
			}
			a {
				display: block;
				height: 49px;
				line-height: 49px;
				color: #DF2D2D;
				font-size: 14px;
			}
		}

	}
	.orderlist {
		padding: 0 15px;
		border-top: 1px solid #ccc;
		margin-bottom: 60px;
		.orderlist-items {
			width: 100%;
			height: 150px;
			margin-bottom: 15px;
			margin-top: 10px;
			display: flex;
			.tickets-left {
				width: 35%;
				height: 100%;
				position: relative;
				background: #c3c3c3;
				.num-top {
					width: 65px;
					height: 48px;
					position: absolute;
					top: 25%;
					left: 25%;
					font-size: 35px;
					border-bottom: 1px solid #f3f3f3;
					span {
						display: inline-block;
						font-weight: bold;
						color: #fff;
					}
					span:nth-child(2) {
						font-size: 20px;
						color: #fff;
					}
				}
				.num-bottom {
					position: absolute;
					top: 62%;
					left: 32%;
					font-size: 14px;
					color: #fff;
				}
			}
			.tickets-right {
				width: 65%;
				height: 100%;
				position: relative;
				background: #f3f3f3;
				.red-bag {
					width: 200px;
					height: 25px;
					white-space: nowrap;
					text-overflow: ellipsis;
					margin-top: 10px;
					padding: 0 5px;
					font-size: 15px;
					overflow: hidden;
					color: #333333;
				}
				.bag-infor {
					width: 200px;
					height: 30px;
					font-size: 12px;
					padding: 0 10px;
					color: #999999;
				}
				.bag-end {
					position: absolute;
					bottom: 25px;
					right: 15px;
					color: #777777;
				}
				.bag-time {
					width: 200px;
					height: 20px;
					font-size: 12px;
					position: absolute;
					bottom: 0;
					left: 25px;
					border-top: 1px solid #999999;
					color: #777777;
				}
			}
		}
	}

</style>