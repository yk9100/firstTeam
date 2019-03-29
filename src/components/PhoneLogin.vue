<template>
	<div>
		<div id="input-infor">
			<p>
				<input type="number" placeholder="请输入手机号" @input="buttonType" 
				v-model="mytext">
				<van-button  type="danger" :class="$store.state.isButtonShow?'show':''">获取验证码</van-button>
			</p>
			<p>
				<input type="password" placeholder="请输入短信验证码">
			</p>
		</div>
	</div>
</template>


<script>
	import axios from 'axios'

	export default {
		data () {
			return {
				mytext: '',
			}
		},

		methods: {
			buttonType () {
				this.$store.commit('buttonShow');
				if (this.mytext === '') {
					this.$store.commit('buttonHide');
					console.log(this.$store.state.isButtonShow)
				} else {
					this.$store.commit('buttonShow');
					console.log(this.$store.state.isButtonShow)
				}
			}
		},

		mounted () {
			

		}

	};
</script>

<style lang="scss" scoped="">
	.show {
		background: #E64C46!important;
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
</style>