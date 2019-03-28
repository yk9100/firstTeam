<template>
	<div>
		<div id="input-infor">
			<p>
				<input type="text" placeholder="请输入手机号">
				<van-button  type="danger" >获取验证码</van-button>
			</p>
			<p>
				<input type="password" placeholder="请输入短信验证码">
			</p>
		</div>
	</div>
</template>


<script>
	
	export default {


	};
</script>

<style lang="scss" scoped="">
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
			border-bottom: 1px solid #ccc;
			text-align: center;
			input {
				width: 95%;
				height: 100%;
				border: 0;
			}
		}
		p:nth-child(1) {
			input {
				width: 68%;
			}

			button {
				height: 35px;
    			width: 100px;
    			background: #DF2D2D;
    			border: 1px solid #DF2D2D;
    			span {
    				display: block;
    				height: 35px;
    				line-height: 35px;
    			}
			}
		}
	}
</style>