<template>
  <div v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="10">
  
  
    <h1 ref="tou">影院</h1>
    <h5 :class="istou?'tofixed':''"><span @click="popupVisible=!popupVisible ">{{myCity}}▼</span><b>搜影院</b>
		<mt-popup
  v-model="popupVisible"
  position="left" 
  popup-transition="popup-fade" style="width:100%" modal closeOnClickModal >
  <div id="hot">
  <h2 @click="popupVisible=!popupVisible">热门城市</h2>
  <div class="city-list city-list-inline clearfix">
    
      <div class="city-item" data-nm="上海" data-id="10" @click="changeCity">
        上海
      </div>
    
      <div class="city-item" data-nm="北京" data-id="1" @click="changeCity">
        北京
      </div>
    
      <div class="city-item" data-nm="广州" data-id="20" @click="changeCity">
        广州
      </div>
    
      <div class="city-item" data-nm="深圳" data-id="30" @click="changeCity">
        深圳
      </div>
    
      <div class="city-item" data-nm="武汉" data-id="57" @click="changeCity">
        武汉
      </div>
    
      <div class="city-item" data-nm="天津" data-id="40" @click="changeCity">
        天津
      </div>
    
      <div class="city-item" data-nm="西安" data-id="42" @click="changeCity">
        西安
      </div>
    
      <div class="city-item" data-nm="南京" data-id="55" @click="changeCity">
        南京
      </div>
    
      <div class="city-item" data-nm="杭州" data-id="50" @click="changeCity">
        杭州
      </div>
    
      <div class="city-item" data-nm="成都" data-id="59" @click="changeCity">
        成都
      </div>
    
      <div class="city-item" data-nm="重庆" data-id="45" @click="changeCity">
        重庆
      </div>
    
  </div>
</div>
</mt-popup>

    </h5>
    <article @click="popupVisible1=!popupVisible1">
    <div>{{mytag}}▼</div>
	<mt-popup
  v-model="popupVisible1"
  position="left" class="filterCinemas">
  		<ul @click="popupVisible1===false">
  			<li v-for="data in filterCinemas"  @click="changeCinema">
  				<span :data-id="data.id" :data-tag="data.name">{{data.name}}</span><span :data-id="data.id" :data-tag="data.name">{{data.count}}</span>
  			</li>
  		</ul>
	</mt-popup>
</article>

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
	<div class="fixed" @click="toTop()">Top</div>
  </div>
</template>
<script>
	import axios from 'axios';
	import Vue from 'vue'
	//懒加载ui
	import { InfiniteScroll } from 'mint-ui';
	//等待加载转圈
	import { Indicator } from 'mint-ui';


	import { Popup } from 'mint-ui';

	Vue.component(Popup.name, Popup);
	Popup.name = 'aaa'
	Vue.use(InfiniteScroll);
	
	export default {
		data () {
			return {
				addrlist : [],
				mydata : '',
				pageNum : 1,
				popupVisible : false,
				mycid : 65,
				myCity : '大连',
				popupVisible1 : false,
				filterCinemas : [],
				myBrindId : -1,
				mytag: '品牌',
				istou: false,
			}
		},
		methods: {	


			toTop () {
				 document.documentElement.scrollTop = 0;
				
			},
			changeCinema ($event) {
				this.myBrindId = $event.target.getAttribute('data-id');
				this.mytag = $event.target.getAttribute('data-tag');
				//影院分类
				axios({
					url: `/ajax/cinemaList?day=${this.mydate}&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=${this.myBrindId}&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=false&reqId=1553855206515&cityId=${this.mycid}`
				}).then(res=> {
					//console.log(res.data.cinemas);
					this.addrlist = res.data.cinemas;
				});
			},

			handleClick (data) {
				this.$router.push(`/show?cinemaId=${data}`);


			},
			//根据地区获取信息		
			changeCity ($event) {
				this.popupVisible = false;
				this.mycid = $event.path[0].dataset.id;
				this.myCity = $event.path[0].dataset.nm;
				this.mytag = '品牌';
				this.myBrindId = -1;
				axios({
					url: `/ajax/cinemaList?day=${this.mydate}&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=${this.myBrindId}&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1553686144829&cityId=${this.mycid}`
				}).then(res=> {
					//console.log(res.data.cinemas);
					this.addrlist = res.data.cinemas;
					// Indicator.close();
				});


				//影院分类
				axios({
					url: `/ajax/filterCinemas?ci=${this.mycid}`
				}).then(res=> {
					//console.log(res.data.brand);
					this.filterCinemas = res.data.brand.subItems;
					// Indicator.close();
				});
			},
			//懒加载方法
			loadMore () {
				// Indicator.open();
				axios({
					url: `/ajax/cinemaList?day=${this.mydate}&offset=${this.pageNum++*20+1}&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=${this.myBrindId}&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1553686144829&cityId=${this.mycid}`
				}).then(res=> {
					console.log(res.data.cinemas);
					this.addrlist = [ ...this.addrlist ,...res.data.cinemas];
				})
			}
		},
		beforeCreate () {
			

		},
		mounted () {
			window.onscroll = ()=> {
				var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
				
				if (scrollTop >= 50 ) {
					this.istou = true;
				} else {
					this.istou = false;
				}
			}


			
			var y = new Date().getFullYear();
			var m = new Date().getMonth() + 1;
			var d = new Date().getDate();
			this.mydate = y + '-' + m + '-' + d;
			//console.log(this.mydate);

			//影院列表
			axios({
				url: `/ajax/cinemaList?day=${this.mydate}&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=${this.myBrindId}&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1553686144829&cityId=${this.mycid}`
			}).then(res=> {
				//console.log(res.data.cinemas);
				this.addrlist = res.data.cinemas;
				// Indicator.close();
			});

			//影院分类
			axios({
				url: `/ajax/filterCinemas?ci=${this.mycid}`
			}).then(res=> {
				//console.log(res.data.brand);
				this.filterCinemas = res.data.brand.subItems;
				// Indicator.close();
			});
		}
	}
</script>
<style lang="scss" scoped>
	.tofixed{
		position: fixed;
		top:0;
		left:0;
		width: 100%;
	}
	.fixed{
		height: 40px;
		background: red;
		position: fixed;
		bottom:80px;
		right:10px;
		border: 1px solid #e54847;
		color: #e54847;
		background: #fff;
		width:40px;
		outline: none;
		border-radius: 5px;
		font-size: 18px;
		line-height: 40px;
		text-align: center;
	}
	article{
		border-bottom:1px solid #f4f4f4;
		div{
			color: #777;
			text-align: center;
		    line-height: 40px;
		    position: relative;
		    white-space: nowrap;
		    overflow: hidden;
		    font-size: 13px;
		    text-overflow: ellipsis;
		}
	}
	.filterCinemas{
		width:100%;
		ul{
			height: 345px;
			background: #fff;
			overflow: auto;
			li:nth-child(1) {
				border-top:1px solid #f4f4f4;
			}
			li{
				line-height: 44px;
			    height: 44px;
			    padding: 0 15px 0 26px;
			    border-bottom: 1px solid #e5e5e5;
			    span:nth-child(1){
			    	display: inline-block;
   					 width: 49%;
			    }
			    span:nth-child(2){
			    	text-align: right;
			    	font-size: 12px;
			    	display: inline-block;
   					 width: 49%;
			    }
			}
		}
	}
    h5{
    	position: relative;
    	display: flex;
	    -webkit-box-align: center;
	    align-items: center;
	    height: 44px;
	    -webkit-box-pack: justify;
	    justify-content: space-between;
	    background: #f5f5f5;
		span{
			padding-left: 15px;
		    font-size: 15px;
		    color: #666;
		    display: -webkit-box;
		    display: flex;
		    -webkit-box-align: center;
		    align-items: center;
		}
		b{
			flex: 1;
			font-weight: normal;
			-webkit-box-pack: center;
		    justify-content: center;
		    -webkit-box-align: center;
		    align-items: center;
		    height: 28px;
		    font-size: 13px;
		    color: #b2b2b2;
		    margin-left: 18px;
		    border: .5px solid #e6e6e6;
		    border-radius: 5px;
		    margin-right: 15px;
		    background: #fff;
		    line-height: 28px;
		    text-align: center;
		}
		div{
			
		    -webkit-box-pack: center;
		    justify-content: center;
		    -webkit-box-align: center;
		    align-items: center;
		    height: 28px;
		    font-size: 13px;
		    color: #b2b2b2;
		    
		    border: .5px solid #e6e6e6;
		    border-radius: 5px;
		   
		    background-color: #fff;
		    text-align: center;
		    line-height: 29px;
		    font-weight: normal;
		}
    }
	#hot{
		width:100%;
		h2{
			padding-left: 15px;
    		line-height: 30px;
    		background-color: #ebebeb;
		    font-size: 14px;
		    color: #333;
		}
		.city-list{
			height:370px;
			display: flex;
			flex-wrap: wrap;
			background-color: #f5f5f5;
			div{
			    width: 29%;
			    height: 33px;
			    margin-top: 15px;
			    margin-left: 3%;
			    padding: 0 4px;
			    border: 1px solid #e6e6e6;
			    border-radius: 3px;
			    line-height: 33px;
			    text-align: center;
			    box-sizing: border-box;
			    white-space: nowrap;
			    overflow: hidden;
			    text-overflow: ellipsis;
			}
			.city-item{
				background: #fff;
			}
		}
	}


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
