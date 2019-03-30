<template>
	<div>
		<h1><a href="javascript:history.go(-1)"><</a><b>确认订单</b><a href="javascript:;"></a></h1>
		<header v-if="datalist">
			<img :src="rep2(datalist[3])" />
			<aside>
				<h2><span>{{ren[datalist[0]]}}</span>{{datalist[1]}}</h2>
				<p>有效期：2018.03.15-2019.04.15</p>
				<p>可用时间：00:00-24:00 </p>
				<b>{{datalist[2]}}元</b>
			</aside>
		</header>
		<main>
			<h2>数量</h2>
			<button @click="--mytext<1?mytext=1:mytext">-</button>
			<input type="text" v-model="mytext" />
			<button @click="mytext++">+</button>
		</main>
		<h3>提示信息</h3>
		<h4>使用时间：请在影城卖品部营业时间兑换。</h4>
		<h5>手机号： 188xxxx6992</h5>
		<article>
			<p><span>随时可退</span>小计<b>￥{{totalPrice}}</b></p>
			<button>确认支付</button>
		</article>
	</div>
</template>
<script>
	import axios from 'axios';
	export default{
		data () {
			return {
				datalist : null,
				ren : ['haha','单人','双人','多人'],
				mytext : 1,
				price: 100,
			}
		},
		methods: {
			rep2 (str) {
				return str.replace('/w.h/', '/440.0/');
			},
		},
		mounted () {
			console.log(this.$route.query.mydata.split(','));
			this.datalist = this.$route.query.mydata.split(',');
			this.price = this.datalist[2];
		},
		computed: {
			totalPrice () {
				return Math.ceil(this.price * this.mytext);
			}
		}
	}
</script>
<style lang="scss" scoped>
	article{
		height: 100px;
		button{
			display: block;
			border:0;
			background-color: #f90;
			color:#fff;
			height:47px;
			line-height: 47px;
			text-align: center;
			width:95%;
			font-size:18px;
			margin:auto;
			border-radius: 5px;

		}
		p{
			height: 15px;
			padding:14px 10px;
			text-align: right;
			span{
				color: #6bbd00;
				font-size: 15px;
				float: left;
			}
			b{
				font-weight: normal;
				float: right;
				color: #33C1AF;
				font-size:18px;
				width:70px;
			}
		}
	}
	h5{
		font-size:14px;
		font-weight: normal;
		border-bottom:1px solid #f4f4f4;
		padding:14px 10px;
	}
	h3{
		font-size: 14px;
		font-weight: 700;
		padding:14px 10px;
		margin-top: 10px;
		border-bottom:1px solid #f4f4f4;
	}
	h4{
		font-weight: normal;
		color: #999;
	    font-size: 13px;
	    line-height: 21px;
	    padding:14px 10px;
	    margin-top: 10px;
	    border-bottom:1px solid #f4f4f4;

	}
	main{
		height: 37px;
		display: flex;
		justify-content: space-around;
		 border-bottom:1px solid #f4f4f4;
		margin: 0 10px;
		padding-top:5px;
		h2{
			font-size: 14px;
			width: 55%;
			height: 37px;
			line-height: 37px;
		}
		input{
			border:0;
			width:20%;
			border:1px solid #ccc;
			border-radius: 5px;
			text-align: center;
		}
		button{
			border: 1px solid #e54847;
			color: #e54847;
			background: #fff;
			width:30px;
			outline: none;
			width:10%;
			border-radius: 5px;
			font-size: 18px;
		}
	}
	header{
		padding:15px 10px;
		height:105px;
		img{
			float: left;
			width:90px;
			height: 90px;
			margin-right:10px;
		}
		aside{
			float: left;
			width:70%;
			h2{
				font-size:14px;
				font-weight: normal;
				margin-bottom: 5px;
				span{
					display: inline-block;
				    vertical-align: top;
				    margin-top: 1px;
				    margin-right: 7px;
				    padding: 0 4px;
				    font-size: 10px;
				    line-height: 15px;
				    height: 15px;
				    background: #f90;
				    border-radius: 2px;
				    color: #fff;
				}
			}
			p{
				color:#999;
				font-size: 13px;
			}
			b{
				font-weight: normal;
				display: block;
				color: #f03d37;
				margin-top: 8px;
				font-size:16px;
			}
		}
	}
	h1{
		height: 50.5px;
	    color: #fff;
	    background: #e54847;
	    border-bottom: 1px solid #e54847;
	    display: flex;
	    a{
	    	height: 50px;
		    width: 22.5px;
		    line-height: 50px;
		    padding: 0 15px;
		    color:white;
		    text-decoration: none;
		    display: inline-block;
	    }
	    b{
	    	flex:1;
	    	font-size: 18px;
		    font-weight: 400;
		    text-align: center;
		    line-height: 50px;
		    text-overflow: ellipsis;
		    white-space: nowrap;
		    overflow: hidden;
		    display: inline-block;
	    }
	}
</style>