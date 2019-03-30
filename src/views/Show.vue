<template>
	<div v-if="mydata">
		<h1><a href="javascript:history.go(-1)"><</a><b>{{mydata.cinemaData.nm}}</b><a href="javascript:;"></a></h1>
		<header>
			<div>
				<h2 v-if="mydata">{{mydata.cinemaData.nm}}</h2>
				<h3 v-if="mydata">{{mydata.cinemaData.addr}}</h3>
			</div>
			<p>
			<img src="data:image/png;base64,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" /></p>
		</header>
		<div class="swiper-container" style="background-color: #40454d; width:100%">
		    <div class="swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(40%, 0px, 0px)!important; ">
		        <div class="swiper-slide"  v-for="data,index in mydata.showData.movies" >
		        	
		        	<img :src="rep1(data.img)" style="width: 70px; height: 100px;" v-yk="data" 
		        	:class="isCurrent === index?'current':''" @click="changeClick(index, data)"/>
		        </div>
		    </div> 
		    <!-- 如果需要分页器 -->
   			 
		</div>
		<section>
			<h2 >{{currentData.nm}}<span v-if="currentData.sc!=='0.0'">{{currentData.sc}}分</span>
			<span v-else>暂无评分</span>
			</h2>
			<p>{{currentData.desc}}</p>
		</section>
		<article v-for="data in currentData.shows">
			<div v-for="item in data.plist">
				<aside >
					<h2 class="begin">{{item.tm}}</h2>
					<p class="end">{{item.dt}}</p>
				</aside>
				<aside >
					<h2 class="lan">{{item.lang}}{{item.tp}}</h2>
					<p class="end">{{item.th}}</p>
				</aside>
				<aside >
					<h2 class="begin"><b class="sellPr">￥23</b><span
						class="icon">{{item.vipPriceName}}{{item.vipPrice}}</span></h2>
					<p class="end">折扣卡首单特惠</p>
				</aside>
				<button class="button">
					购票
				</button>
			</div>
		</article>
		<main>
			<h2>影院超值套餐</h2>
			<div v-for="data in mydata.dealList.dealList" @click="toCart(data)">
				<img :src="rep2(data.imageUrl)" alt="" style="width:92px; height:92px ">
				<aside>
					<h3><span>{{ren[data.recommendPersonNum]}}</span>{{data.title}}</h3>
					<h4>{{data.curNumberDesc}}</h4>
					<p><span>￥{{data.price}}</span><button>去购买</button></p>
				</aside>
			</div>
		</main>
	</div>
</template>
<script>
	import axios from 'axios';
	import Vue from 'vue';
	Vue.directive('yk', function (el, binding) {
		if (el.className === 'current') {
			
		}
	});
	export default {
		data () {
			return {
				mydata : null,
				isCurrent : 0,
				currentData : null,
				ren : ['haha','单人','双人','多人']
			}
		},
		methods: {
			rep1 (str) {
				return str.replace(/w.h/,'148.208');
			},
			rep2 (str) {
				return str.replace('/w.h/', '/440.0/');
			},
			changeClick (index,data) {
				this.isCurrent = index;
				console.log(data);
				this.currentData = data
			},
			toCart (data) {
				var mydata = data.recommendPersonNum + ',' + data.title + ','+ data.price + ',' + data.imageUrl;
				this.$router.push(`/cart?mydata=${mydata}`);
			}
		},
		mounted () {
			var cinemaId = this.$route.query.cinemaId;
			axios({
				url: `/ajax/cinemaDetail?cinemaId=${cinemaId}`
			}).then(res=> {
				this.mydata = res.data;
				this.currentData = res.data.showData.movies[0];
				console.log(this.mydata.dealList.dealList);
			});

		},
		updated () {
			 var swiper = new Swiper('.swiper-container', {
			      effect: 'coverflow',
			      grabCursor: true,
			      centeredSlides: true,
			      slidesPerView: '3',
			      coverflowEffect: {
			        rotate: 0,
			        stretch: 0,
			        depth: 100,
			        modifier: 1,
			        slideShadows : true,
			      },
			      pagination: {
			        el: '.swiper-pagination',
			      },
			    });
			}	
	}
</script>
<style scoped lang="scss">
	main{
		margin-bottom:50px;
		margin:0 12px;
		h2{
			line-height: 45px;
		    height: 45px;
		    font-size: 15px;
		    color: #666;
		    font-weight: normal;
		}
		div{
			display: flex;
			padding:17px 0;
			
			border-bottom:1px solid #f4f4f4;
			aside{
				position: relative;
				margin-left:10px;
				flex:1;
				p{
					width: 100%;
					position: absolute;
					left:0;
					bottom:0;
					span{
						float: left;
					    color: #f03d37;
					    font-size: 17px;
					}
					button{
						border:0;
						float: right;
						display: inline-block;
					    padding: 0 8px;
					    height: 27px;
					    line-height: 27px;
					    font-size: 12px;
					    border-radius: 3px;
					    color: #fff;
					    background-color: #f03d37;
					}
				}
				h4{
					position: absolute;
					right:0;
					bottom:32px;
					text-align: right;
					line-height: 16px;
				    height: 16px;
				    font-size: 12px;
				    color: #999;
				    font-weight: normal;
				}
				h3{
					font-weight: normal;
					font-size: 14px;
				    line-height: 18px;
				    color: #333;
				    display: -webkit-box;
				    overflow: hidden;
				    text-overflow: ellipsis;
				    -webkit-line-clamp: 2;
				    -webkit-box-orient: vertical;
					span{
						display: inline-block;
					    vertical-align: top;
					    margin-top: 1px;
					    margin-right: 7px;
					    padding: 0 4px;
					    font-size: 10px;
					    line-height: 15px;
					    height: 15px;
					    background: #f90;
					    border-radius: 2px;
					    color: #fff;
					}
				}
			}
		}
	}
	.icon{
		    color: #fff;
    background-color: #f90;
    font-size: 12px;
	}
	.sellPr{
		line-height: 1;
	    color: #f03d37;
	    margin-top: 1px;
	    font-size: 19px;
	}
	.button{
		border:0;
		italic:normal;
		margin-left:35px;
	    width: 45px;
	    height: 27px;
	    line-height: 28px;
	    font-size: 12px;
	    background-color: #f03d37;
	    color: #fff;
	    border-radius: 4px;
	    text-align: center;
	}
	.lan{
		margin-top: 2px;
	    line-height: 18px;
	    font-size: 13px;
	    color: #333;
	    white-space: normal;
	    font-weight: normal;
	}
	.begin{
		    font-size: 20px;
		    color: #333;
		    line-height: 1;
		    white-space: nowrap;
		    font-weight: normal;
	}
	.end{
		margin-top: 10px;
	    color: #999;
	    font-size: 11px;
	    line-height: 1;
	    white-space: nowrap;
	}
	article{

		div{
			display: flex;
			padding:17px 0;
			margin:0 12px;
			border-bottom:1px solid #f4f4f4;
			aside{
				flex:1;
			}
		}
	}
	section{
			border-bottom:1px solid #f4f4f4;
		    padding: 11px 15px;
    		text-align: center;
    		h2{
    			line-height: 24px;
			    font-size: 17px;
			    color: #333;
			    font-weight: 700;
    			span{
    				color: #ffb400;
    				font-size: 15px;
    				margin-left: 5px;
    			}
    		}
    		p{
    			margin-top: 2px;
			    height: 18.5px;
			    line-height: 18.5px;
			    font-size: 13px;
			    color: #999;
    		}
	}
	.current{
		border:1px solid #ffffff;
	}
	h1{
		height: 50.5px;
	    color: #fff;
	    background: #e54847;
	    border-bottom: 1px solid #e54847;
	    display: flex;
	    a{
	    	height: 50px;
		    width: 22.5px;
		    line-height: 50px;
		    padding: 0 15px;
		    color:white;
		    text-decoration: none;
		    display: inline-block;
	    }
	    b{
	    	flex:1;
	    	font-size: 18px;
		    font-weight: 400;
		    text-align: center;
		    line-height: 50px;
		    text-overflow: ellipsis;
		    white-space: nowrap;
		    overflow: hidden;
		    display: inline-block;
	    }
	}
	header{
		position: relative;
		height:74px;
		div{
			padding: 15px 100px 15px 15px;
			float: left;
			h2{
				font-size: 17px;
			    line-height: 24px;
			    font-weight: 700;
			    color: #333;
			}
			h3{
			    margin-top: 2px;
			    font-size: 13px;
			    line-height: 18.5px;
			    color: #999;
			    font-weight: normal;
			}
		}
		p{	
			position: absolute;
			right:0;
			top:50%;
			margin-top: -15px;
			width: 70px;
            height: 31px;
			border-left: 1px solid #d8d8d8;
            text-align: center;
			img{
				width:19px;
				height:22px;
				margin-top: 5px;
				display: inline-block;
			}
		}
	}
</style>