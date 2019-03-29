<template>
	<div>
		<div id="input-infor">
			<p><input type="text" placeholder="账户名/手机号/Email" @input="buttonType" 
				v-model="mytext"></p>
			<p><input type="password" placeholder="请输入您的密码"></p>
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
				if(this.mytext === '') {
					this.$store.commit('buttonHide');
				} else {
					this.$store.commit('buttonShow');
				}
			}
		},

		mounted () {
			// console.log(this.$store)
			axios({
				
			})
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
				border-bottom: 1px solid #ccc;
			}
		}
		p:nth-child(2) {
			border-bottom: 1px solid #ccc;
		}
	}


</style>