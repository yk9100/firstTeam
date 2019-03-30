<template>
	<div>
		<div id="input-infor">
			<p>
				<input type="number" 
				placeholder="请输入手机号" 
				@input="buttonType" 
				v-model="mytext">
				<van-button
				type="danger"
				:class="$store.state.isButtonShow?'show':''"
				@click="xxClick">获取验证码
				</van-button>
			</p>
			<p>
				<input type="password" 
				placeholder="请输入短信验证码"
				v-model="mypassword">
			</p>
		<!-- button -->
		<van-button  
		size="large" 
		:class=" $store.state.isButtonShow ? 'show' : '' " 
		@click="xClick"
		class="btn">登录
		</van-button>
		</div>
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
				if (this.mytext === '') {
					this.$store.commit('buttonHide');
					// console.log(this.$store.state.isButtonShow)
				} else {

					this.$store.commit('buttonShow');
					// console.log(this.$store.state.isButtonShow)
				}
			},

			xxClick() {
				console.log(this.mytext)
				if(this.mytext ==='') return;
				else {
					axios({
						type: 'get',
						url: '/DBphonename.json',
					}).then(res=>{
						// console.log(res.data);
						alert('【喵眼网】 提示您：短信验证码为 666666，(登录验证码，请完成验证)，如非本人操作，请忽略本短信');
					})
				}
			},

			xClick() {
				// console.log(this.mytext)
				// console.log(this.mypassword)
				if(this.mytext === '' || this.mypassword === '') return;
				else {
					if (this.mytext === '666666' && this.mypassword === '666666') {
						axios({
							type: 'get',
							url: '/DBphonename.json',
						}).then(res=>{
							// console.log(res.data);
							this.$router.push('/mycenter');
						})
					} else {
						alert('手机号或者验证码错误');
					}
				}
			}
		},
	};
</script>

<style lang="scss" scoped="">
	.show {
		background: #DF2D2D!important;
		color: #fff!important;
	}
	* {
		margin: 0;
		padding: 0;
	}

	html, body {
		width: 100%;
		height: 100%;
	}

	#input-infor {
		width: 100%;
		p {
			width: 100%;
			height: 45px;
			text-align: center;
			input {
				width: 95%;
				height: 100%;
				border: 0;
			}
		}
		p:nth-child(1) {
			width: 100%;
			height: 45px;
			border-bottom: 1px solid #ccc;
			input {
				width: 68%;
				border-bottom: 0;
			}
			button {
				height: 35px;
    			width: 100px;
    			background: #dcdcdc;
    			border-color: #dcdcdc;
    			color: #999999;
    			span {
    				display: block;
    				height: 35px;
    				line-height: 35px;
    			}
			}
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