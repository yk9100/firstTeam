<template>
	<div class="theaters" v-if="topic">
		
		<div class="navbar">
			<!-- 回退按钮 -->
			<div class="nav-wrap-left">
				<a href="javascript:history.go(-1)"><i class="icon-back"></i></a>
			</div>
			<h1>{{topic.nm}}</h1>
		</div>
		
		<div class="movie-detail">
			<div class="movie-filter"></div>
			<div class="poster-bg" >
				<img :src="replaceStr(this.topic.img)" alt="">
			</div>
			<div class="detail">
				<div class="poster"><img :src="replaceStr(this.topic.img)" alt=""></div>
				<div class="content">
					<div class="title">{{topic.nm}}</div>
					<div class="en-name">{{topic.enm}}</div>
					<div class="score" v-if="this.topic.sc != 0">
						{{isInteger(topic.sc)}} 
						<span class="snum">（{{topic.snum}}人评）</span>
					</div>
					<div class="score" v-else>
						<span class="want">{{topic.wish}}人想看</span>
					</div>
					<div class="type">{{topic.cat}}</div>
					<div class="src">{{topic.fra}} / {{topic.dur}}分钟</div>
					<div class="pubDesc">{{topic.pubDesc}}</div>
				</div>
			</div>
			<div class="arrow-g"><img src="../assets/arr_icon.png" alt=""></div>
		</div>
		<!-- theaters information -->
		<div id="showDays" v-if="thisWeek">
			<ul id="timeline" class="mb-line-b">
				<li v-for="items in thisWeek.showDays.dates" @click="getCinemas">
					{{items.date}}
				</li>
			</ul>
		</div>
		<div class="nav-wrap">
			<div class="inner-flex">
				<div class="item">全城</div>
				<div class="item">品牌</div>
				<div class="item">特色</div>
			</div>
		</div>
		<div class="cinema-list" v-if="thisWeek">
			<div class="items" v-for="theater in thisWeek.cinemas">
				<div class="title">
					<span>{{theater.nm}}</span>
					<span class="price-block">{{theater.sellPrice}}</span>
					<span class="q">元起</span>
				</div>
				<div class="location-block">
					<div class="line-ellipsis">{{theater.addr}}</div>
					<div class="distance">{{theater.distance}}</div>
				</div>
				<!-- tags -->
				<div class="label-block">
					<span class="allowRefund" v-if="theater.tag.allowRefund == 1">退</span>
					<span class="endorse" v-if="theater.tag.endorse == 1">改签</span>
					<span class="snack" v-if="theater.tag.snack == 1">小吃</span>
					<span class="vipTag" v-if="theater.tag.vipTag == 1">折扣卡</span>
					<span class="hallType" v-for="hall in theater.tag.hallType">{{hall}}</span>

				</div>
				<div class="discount-block">
					<div class="card"><img src="../assets/ka.png" alt=""></div>
					<div class="discount-text">{{theater.promotion.cardPromotionTag}}</div>
				</div>
				<div class="min-show">
					<span>近期场次:</span><span>{{theater.showTimes}}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import Vue from 'vue'

	export default {
		data () {
			return{
				// 接收到的电影id
				filmid: this.$route.params.filmId,
				// film information
				topic: null,
				// this week information
				thisWeek: null,
				// theaters information
				cinemas: null,
				// Formatting time
				today: "",
				timestamp: function(){
					return 	Date.parse(new Date());
				}
			}
		},

		methods:{
	      replaceStr (str) {
	        return str.replace(/w.h/, '71.100')
	      },
		  isInteger (num) {
			if (Math.floor(num) === num) {
				return num.toFixed(1)
			}else{
				return num
			}
		  },
		  getToday(){
		  	var date = new Date();
		  	var month = date.getMonth() + 1;
		  	var strDate = date.getDate();
		  	if (month>1 && month<=9) {
		  		month = "0" + month;
		  	}
		  	if (strDate>=0 && strDate<=9) {
		  		strDate = "0" + month
		  	}
		    if (strDate>=0 && strDate<=9) {
		        strDate = "0" + strDate;
		    }

		    this.today = date.getFullYear() + "-" + month + "-" + strDate
		  },

		  getCinemas(){
		  	console.log("11")
		  }
		},
		created () {
			// 获取格式化后的时间
			this.getToday();
		},
		mounted () {
			
			// 隐藏底部菜单
			this.$store.commit("hideTabbar");
			// 根据id请求电影信息
			axios.get(`/ajax/detailmovie?movieId=${this.filmid}`).then((res)=>{

				this.topic = res.data.detailMovie
				//console.log(this.topic)
			})

			// 根据时间戳
			axios({
				url:`/ajax/movie?forceUpdate=${this.timestamp()}`,
				method:'post',
				data:{
					movieId: `${this.filmid}`,
					day: `${this.today}`,
					offset: '0',
					limit: '20',
					districtId: '-1',
					lineId: '-1',
					hallType: '-1',
					brandId: '-1',
					serviceId: '-1',
					areaId: '-1',
					stationId: '-1',
					item: '',
					updateShowDay: 'true',
					reqId: `${this.timestamp()}`,
					cityId: '65'
				}
			}).then((res)=>{
				this.thisWeek = res.data
				console.log(res.data)
			})

			// 根据日期
			axios.get(`/ajax/filterCinemas?movieId=${this.filmid}&day=${this.today}`).then((res)=>{
				
				this.cinemas = res.data
				//console.log(this.cinemas)
			})

		},

		destroyed(){
			this.$store.commit("showTabbar")
		}
	}

</script>

<style lang="scss" scoped>
	*{
		box-sizing: border-box;
	}

	::-webkit-scrollbar {
    	height: 0!important;
	}
	/* top */
	.navbar{
		position: relative;
	    color: #fff;
	    width: 100%;
	    height: 50px;
		background: #e54847;
		overflow: hidden;
		user-select: none;
		-webkit-user-select: none;
	
		.nav-wrap-left{
			position: absolute;
			top: 0;
			left: 0;
			margin-left: 10px;
		 	padding: 0 10px;
			width: 45px;
			height: 50px;
			text-align: center;
			line-height: 54px;

			i{
				display: inline-block;
				width: 16px;
				height: 16px;
				border-bottom: 2px solid #fff;
				border-left: 2px solid #fff;
				-webkit-transform: rotate(45deg);
				transform: rotate(45deg);
			}
		}
		
		h1{
			width: 80%;
			margin: 0 auto;
		    font-size: 18px;
		    font-weight: 400;
		    text-align: center;
		    line-height: 50px;
		    text-overflow: ellipsis;
		    white-space: nowrap;
		    overflow: hidden;
		}
	}

	/* body */
	.movie-detail{
    	position: relative;
    	width: 100%;
		height: 188px;
    	cursor: pointer;
    	overflow: hidden;

		.movie-filter {
			position: absolute;
			z-index: -1;
			width: 100%;
			height: 100%;
			background-color: #333;
		}

		.poster-bg{
		    width: 100%;
		    height: 100%;
		    z-index: -1;
		    overflow: hidden;
		    position: absolute;
		    -webkit-filter: blur(1.2rem);
		    filter: blur(1.2rem);
		    background-size: cover;
		    background-repeat: no-repeat;
		    opacity: .55;

		    img{
			    width: 100%;
		    	height: 100%;
		    }
		}

		.detail{
			display: flex;
		    height: 188px;
		    padding: 19px 30px 19px 15px;

		    .poster{
		    	img{
					width: 110px;
					height: 150px;
		    	}
		    }

		    .content{
		    	flex: 1;
				color: #fff;
				line-height: 1;
				margin-left: 12.5px;
		    	overflow-x: hidden;

		    	.title{
		    		font-size: 20px;
					margin-top: 2px;
					font-weight: 700;
					overflow: hidden;
		    	}

		    	.en-name{
		    		margin-top: 10px;
				    font-size: 12px;
				    color: #fff;
				    opacity: .8;
		    	}

		    	.score{
		    		font-size: 18px;
				    font-weight: 700;
				    color: #fc0;
				    margin-top: 11px;

				    span{
				    	font-size: 12px;
					    color: #fff;
					    opacity: .8;
				    }
		    	}

		    	.type{
		    		margin-top: 10px;
				    font-size: 12px;
				    color: #fff;
				    opacity: .8;
		    	}

		    	.src{
		    		margin-top: 10px;
		    		font-size: 12px;
				    color: #fff;
				    opacity: .8;
		    	}

		    	.pubDesc{
		    		margin-top: 10px;
		    		font-size: 12px;
				    color: #fff;
				    opacity: .8;
		    	}
		    }
		}

		.arrow-g{
		    position: absolute;
		    width: 10px;
		    right: 15px;
		    top: 50%;
		    -webkit-transform: translateY(-50%);
		    transform: translateY(-50%);

		    img{
		    	width: 100%;
		    }
		}


	}

	#showDays{
	    width: 100%;
    	height: 45px;

	    #timeline{
    		height: 45px;
		    white-space: nowrap;
		    overflow-x: scroll;

			li {
			    position: relative;
			    display: inline-block;
			    width: 115px;
			    margin-left: 4.5px;
			    color: #666;
			    font-size: 14px;
			    text-align: center;
			    line-height: 43px;
			}

			.showDay{
				color: #f03d37;
				border-bottom: 1px solid #f03d37;
			}
	    }
	}

	.nav-wrap{
		border-top: 1px solid #f1f1f1;
		border-bottom: 1px solid #f1f1f1;
		.inner-flex{
			display: flex;

			.item{
				position: relative;
				-webkit-box-flex: 1;
				flex: 1;
				color: #777;
				font-size: 13px;
				line-height: 40px;
				text-align: center;
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
			}

			.item:after{
				content: "";
				position: absolute;
				width: 1px;
				height: 20px;
				right: 0;
				top: 10px;
				background: #f1f1f1;
			}
		}
	}

	.cinema-list{
		.items{
		    position: relative;
		    padding: 13px 15px;
		    background-color: #fff;
		    overflow: hidden;

			.title{
				height: 23px;
			    line-height: 23px;
			    font-size: 16px;
			    color: #000;

			    .price-block{
			    	display: inline-block;
			    	margin-left: 5px;
			    	color: #f03d37;
			    	font-size: 18px;
			    }
			    .q{
			    	margin-left: 3px;
			    	font-size: 11px;
    				color: #f03d37;
			    }
			}

			.location-block{
				display: flex;
				margin-top: 6px;
				font-size: 13px;
				color: #666;

				.line-ellipsis{
					flex: 1;
				    text-overflow: ellipsis;
				    overflow: hidden;
				    white-space: nowrap;
				}

				.distance{
				    margin-left: 5px;
				}
			}

			.label-block{
			    height: 17px;
			    margin-top: 4px;
			    margin-bottom: 4px;
			    font-size: 0;
			    line-height: 17px;
			    overflow: hidden;

				span{
					position: relative;
				    display: inline-block;
				    padding: 0 3px;
				    margin-right: 5px;
				    line-height: 15px;
				    border-radius: 2px;
				    font-size: .6rem;
				}

				.allowRefund{
					color: #589daf;
    				border: 1px solid #589daf;
				}

				.endorse{
					color: #589daf;
    				border: 1px solid #589daf;
				}

				.snack{
			    	color: #f90;
					border: 1px solid #f90;
			    }

			    .vipTag{
			    	color: #f90;
    				border: 1px solid #f90;
			    }

			    .hallType{
					color: #589daf;
    				border: 1px solid #589daf;
			    }

			}

			.discount-block{
				color: #999;
				margin-bottom: 4px;

				.card{
					display: inline-block;
					width: 15px;
				    height: 14px;
				    position: relative;
				    top: 3px;
				    margin-right: 5px;

				    img{
				    	width: 100%;
				    }
				}
				.discount-text{
					display: inline-block;
					margin-left: 0;
    				font-size: 11px;
				}
			}

			.min-show{
			    line-height: 1.5;
			    font-size: 0;

			    span{
		    	    font-size: 12px;
    				color: #999;
			    }
			}
		}
	}
</style>