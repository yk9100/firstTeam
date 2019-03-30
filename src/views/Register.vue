<template>
	<div>
		<header>
			<a href="javascript:history.go(-1);">
				<van-icon name="arrow-left" />
			</a>	
			<p>
				<span>喵眼电影</span>
			</p>
			<div class="hidebox"></div>
		</header>

		<ul id="login-header">
			<li><span>输入手机号</span></li>
			<li><span>></span></li>
			<li><span>输入验证码</span></li>
			<li><span>></span></li>
			<li><span>设置密码</span></li>
		</ul>

		<p id="phonenumber"><input type="number" placeholder="请输入手机号"></p>

		<ul id="rules">
			<van-checkbox v-model="checked" checked-color="#DF2D2D">我已阅读并同意</van-checkbox>
			<a href="javascript:;">《美团网用户协议》</a>
		</ul>

		<van-button size="large">注册</van-button>

		<!-- 页脚 -->
		<p id="copy-right">
			© 猫眼电影 客服电话：
			<a herf="tel:4006705335">400-670-5335</a>
		</p>
	</div>
</template>

<script>
	import Vue from 'vue';
	import Vant from 'vant';
	import 'vant/lib/index.css';

	export default {
		data () {
			return {
				checked: false
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

	#login-header {
		width: 100%;
		height: 40px;
		display: flex;
		border-bottom: 1px solid #ccc;
		li {
			justify-content: space-around;
			span {
				display: block;
				height: 40px;
				line-height: 40px;
				font-size: 14px;
			}
		}
	}

	#phonenumber {
		height: 40px;
		margin-top: 15px;
		// border-bottom: 1px solid #ccc;
		text-align: center;
		input {
			width: 95%;
			height: 40px;
			border-top: 0;
			border-left: 0;
			border-right: 0;
			border-bottom: 1px solid #ccc;
		}
	}

	#rules {
		width: 100%;
		height: 40px;
		display: flex;
		margin-top: 20px;
		.van-checkbox {
			font-size: 14px;
			margin-left: 10px;
		}
		a {
			display: block;
			font-size: 14px;
			color: #DF2D2D;
		}
	}

	button {
		width: 95%;
		height: 50px;
		background: #DF2D2D;
		color: #fff;
		font-size: 20px;
		margin-left: 10px;
		margin-top: 13px;
		border-radius: 5px;
	}

	#copy-right {
		width: 100%;
		height: 30px;
		margin-top: 20px;
		font-size: 14px;
		text-align: center;
		a {
			display: inline-block;
			height: 30px;
			line-height: 30px;
			color: #DF2D2D;
		}
	}
</style>