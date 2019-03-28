<template>
  <div>
    <h1>影院</h1>
	<section v-for="data in addrlist">
		<h2>{{data.nm}}<span>{{data.sellPrice}}</span><b>元起</b></h2>
		<h3><b>{{data.addr}}</b><span>{{data.distance}}</span></h3>
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
		padding:15px;
		height: 124px;
		
		h2{
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
	}
</style>
