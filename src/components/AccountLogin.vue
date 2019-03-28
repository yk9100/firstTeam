<template>
	<div>
		<div id="input-infor">
			<p><input type="text" placeholder="账户名/手机号/Email"></p>
			<p><input type="password" placeholder="请输入您的密码"></p>
		</div>
	</div>
</template>


<script>
	
	export default {


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
	}


</style>