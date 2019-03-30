<template>
	<div>
		<header>	
			<p>
				<span>找回喵眼登录密码</span>
			</p>
		</header>

		<div class="content">
			<h3>请填写您要找回密码的喵眼账号</h3>
		</div>

		<p class="content-type">
			<input type="text" placeholder="手机号/用户名/邮箱" @input="buttonType" v-model="mytext">
		</p>

		<van-button size="large" :class=" $store.state.isButtonShow ? '' : 'show' ">下一步</van-button>
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
				// isButtonShow: false,
				mytext: '',
			}
		},

		methods: {
			buttonType () {
				this.$store.commit('buttonShow')
				if(this.mytext === '') {
					this.$store.commit('buttonShow');
				} else {
					this.$store.commit('buttonHide');
				}
			}
		},

		mounted () {
			console.log(this.$store);
			// this.$store.state.isButtonShow = false;
			
		}
	};
</script>

<style lang="scss" scoped>
	.show {
		background: red;
		color: #fff;
	}

	* {
		margin: 0;
		padding: 0;
	}
	header {
		width: 100%;
		height: 50px;
		background: #DF2D2D;
		display: flex;
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
	}
	.content {
		text-indent: 13px;
		margin: 60px 0;
	}
	.content-type {
		width: 95%;
		height: 40px;
		margin-left: 10px;
		border-bottom: 1px solid #ccc;
		input {
			width: 100%;
			height: 40px;
			line-height: 40px;
			border-top: 0;
			border-left: 0;
			border-right: 0;
		}
	}
	button {
		width: 95%;
		height: 50px;
		background: #e5e5e5;
		color: #999999;
		font-size: 20px;
		margin-left: 10px;
		margin-top: 60px;
		border-radius: 5px;
	}

</style>