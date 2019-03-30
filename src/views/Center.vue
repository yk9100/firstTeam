<template>
	<div class="about">
		<!-- title -->
		<header>
			<a href="javascript:history.go(-1);">
				<van-icon name="arrow-left" />
			</a>	
			<p>
				<span>喵眼电影</span>
			</p>
			<div class="hidebox"></div>
		</header>
		<!-- login headers -->
		<ul id="login-header">
			<router-link to="/center/accountlogin" activeClass="active" tag="li">美团账号登录</router-link>
			<router-link to="/center/phonelogin" activeClass="active" tag="li">手机验证登录</router-link>
		</ul>
		<!-- input -->
		<router-view ></router-view>
		<!-- input信息 -->
		<div id="login-infor">
			<a href="#/register">立即注册</a>
			<a href="#/passport">找回密码</a>			
		</div>
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

	Vue.use(Vant);

	export default {
		data () {
			return {

			}
		},
		methods: {

		}
	};

</script>

<style lang="scss" scoped>
	.show {
		background: #DF2D2D !important;
		color: #fff !important;
	}
	.active {
		color: #DF2D2D;
		border-bottom: 4px solid #DF2D2D;
	}

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
		border-bottom: 4px solid #ccc;
		li {
			flex: 1;
			text-align: center;
			line-height: 40px;
			height: 40px;
			margin: 0 8px;
			font-size: 14px;
		}	
	}
	#login-infor {
		width: 100%;
		height: 28px;
		display: flex;
		justify-content: space-between;
		a {	
			display: block;
			height: 28px;
			line-height: 28px;
			margin: 10px;
			font-size: 14px;
			color: #DF2D2D;
		}
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
