<template>
	<div>
		<div id="input-infor">
			<p><input type="text" placeholder="账户名/手机号/Email" @input="buttonType" 
				v-model="mytext"></p>
			<p><input type="password" placeholder="请输入您的密码" v-model="mypassword"></p>
		</div>
		<!-- button -->
		<van-button 
		 size="large"
		 :class=" $store.state.isButtonShow ? 'show' : '' " 
		 class="btn" 
		 @click="xClick()">登录
		</van-button>	
	</div>
</template>
<script>
	import axios from 'axios'

	export default {
		data () {
			return {
				mytext: '',
				mypassword: '',
			}
		},

		methods: {
			buttonType () {
				this.$store.commit('buttonShow');
				if(this.mytext === '') {
					this.$store.commit('buttonHide');
				} else {
					this.$store.commit('buttonShow');
				}
			},
			xClick() {
				// console.log(this.mytext)
				// console.log(this.mypassword)
				if(this.mytext === '' || this.mypassword === '') return;
				else {
					if(this.mytext === 'admin' && this.mypassword ==='admin') {
						axios({
							type: 'get',
							url: '/DBaccount.json',
						}).then(res=>{
							console.log(res);
							this.$router.push('/mycenter');
						})
							
					} else {
						alert('用户名或者密码错误');
					}

				}
			}
		},

		mounted () {
			// console.log(this.$store)

		}

	};
</script>

<style lang="scss" scoped>
	.show {
		background: #DF2D2D !important;
		color: #fff !important;	
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html, body {
		width: 100%;
		height: 100%;
	}
	#input-infor {
		width: 100%;
		p {
			width: 100%;
			height: 46px;
			text-align: center;
			input {
				width: 95%;
				height: 100%;
				border: 0;
			}
		}
		p:nth-child(1) {
			border-bottom: 1px solid #ccc;
		}
		p:nth-child(2) {
			border-bottom: 1px solid #ccc;
		}

	}

	.btn {
		width: 95%;
		height: 50px;
		background: #dcdcdc;
		color: #999999;
		font-size: 20px;
		margin-left: 10px;
		margin-top: 13px;
		border-radius: 5px;
	}


</style>