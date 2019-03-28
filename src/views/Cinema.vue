<template>
  <div>
    <h1>影院</h1>
	<section v-for="data in addrlist" @click="handleClick(data.id)">
		<h2>{{data.nm}}<span>{{data.sellPrice}}</span><b>元起</b></h2>
		<h3><b>{{data.addr}}</b><span>{{data.distance}}</span></h3>
		<h4>
			<span v-if="data.tag.allowRefund">退</span>
			<span v-if="data.tag.endorse">改签</span>
			<b v-if=data.tag.snack>小吃</b>
			<b v-if=data.tag.vipTag>折扣卡</b>
			<span v-if="data.tag.hallType.length" v-for="item in data.tag.hallType">{{item}}</span>
		</h4>
		<p v-if="data.promotion.cardPromotionTag"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAAgFJREFUSA3Nlz1LA0EQhmf3kouFEQwi+FEYQ+xEsImFoCDoL/CLaKd/QbC0sbCzFVuxsRS1jEVAsUqrIILRQAhaBGKMuawzwpGAm83mNhddCHfZnd3n3Z2ZuxsG2JI3YtQpVw6AiTkhYJj6/GqMwSsIdm312DsnMyzLCF79rGRAiIhfUOm6jL0FQvZU4Gfn0GU4KcINE5vjsc9LFXajE9kcfT7UDZaMQWwuG9Dpi/YyiIWZjqnSxrOAtWgANsYDysV1Bj0L0Flcx8ZoC1F0wf50UMo5fqjCY1FIxxo7jQSUHWgK+ag2YprfGwnIlQTQTk3a/46B2UEOIUu+v0gIIMgZLLTIZHJTOl+TL4K9ShckMc36Q+pc356QB6FLLJQFCqi4f39d2WoKLTy03ckg2OjAvcyXh9n1KX8eA0YC4n0MtuLoJru+o3bvjAS8o2vpfXCYsGEzZkFYHQ5SbcoglM5o6KQAoxhIDHBYiVqYERZcZB04f3aghNGv04wEuIDbQg3u8Lc4YsHymAVLeD17cuDypbWKjgggIZTpVwhM5x1YxzdlpaaXXB0T4J5GEbPy6F7/8WwUhC7U5OpZgIPfU5qnrNTn+UmoXLWNQc8n0AZDacqxUskpLXwcJDbHMinlI0O9NLI51WiAZZLa0odRZBKbU4FINRoDdtoNdxCDWMQk9jePWpE8hVOLbwAAAABJRU5ErkJggg=="/>{{data.promotion.cardPromotionTag}}</p>
		<p v-else>暂无开卡优惠</p>
	</section>
  </div>
</template>
<script>
	import axios from 'axios';
	export default {
		data () {
			return {
				addrlist : [],
			}
		},
		methods: {
			handleClick (data) {
				this.$router.push(`/show?cinemaId=${data}`);
			}
		},
		mounted () {
			axios({
				url: '/ajax/cinemaList?day=2019-03-27&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1553686144829&cityId=65'
			}).then(res=> {
				console.log(res.data.cinemas);
				this.addrlist = res.data.cinemas;
			});
		}
	};
</script>
<style lang="scss" scoped>
	h1{
		background: #e54847;
		color:white;
		width: 100%;
		height: 50px;
		font-size: 18px;
	    font-weight: 400;
	    text-align: center;
	    line-height: 50px;
	}
	section{
		/*box-sizing: border-box;*/
		padding: 13px 0px 13px 0;
    	margin-left: 15px;
    	margin-right: 15px;
		height: 109px;
		border-bottom:1px solid #f4f4f4;
		
		h2{
			margin-top:10px;
			line-height: 23px;
		    font-size: 16px;
		    color: #000;
		    font-weight: normal;
		    span{
		    	font-size: 18px;
		    	color: #f03d37;
		    	margin-left:10px;
		    }
		    b{
		    	font-size:12px;
		    	color: #f03d37;
		    	font-weight: normal;
		    }
		}
		h3{
			margin-top:5px;
			font-weight: normal;
			height: 19px;
			display: flex;
			justify-content: space-between;
			b{
				font-weight: normal;
				text-overflow: ellipsis;
			    overflow: hidden;
			    white-space: nowrap;
			    width:90%;
			    font-size: 13px;
                color: #666;

			}
			span{
				font-size: 13px;
                color: #666;
                margin-left: 5px;
			}
		}
		h4{
			overflow: hidden;
			font-weight: normal;
			height: 22px;
			/*margin: 4px 0;*/
			span{
				color: #589daf;
    			border: 1px solid #589daf;
    			display: inline-block;
			    padding: 0 3px;
			    height: 15px;
			    line-height: 15px;
			    border-radius: 2px;
			    font-size:12px;
			    margin-right:4px;
			}
			b{
				font-weight: normal;
				color: #f90;
    			border: 1px solid #f90;
    			display: inline-block;
			    padding: 0 3px;
			    height: 15px;
			    line-height: 15px;
			    border-radius: 2px;
			    font-size:12px;
			    margin-right:4px;
			}
		}
		p{
			height: 18px;
			margin-top:7px;
			font-size: 11px;
			color:#999;
			overflow: hidden;
			img{
				margin-top:-3px;
				display: inline-block;
				width: 15px;
				height: 14px;
				border:0;
				margin-right:5px;
				vertical-align: middle
			}
		}
	}
</style>
