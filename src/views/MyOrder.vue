<template>
	<div>
		<header>
			<a href="javascript:history.go(-1);">
				<van-icon name="arrow-left" />
			</a>	
			<p>
				<span>我的电影订单</span>
			</p>
			<div class="hidebox"></div>
		</header>
		
		<div v-for="data in datalist" id="list-all">
			<!-- {{data}} -->
			<!-- <div class="orders"> -->
				<div class="cinemas">
					<a @click="cinemaDetail(data.cinema.id)">{{data.cinema.name}}></a>
					<!-- <van-icon name="arrow" /> -->
				</div>
				<div class="movies">
					<img :src="data.movie.img | newImg">
					<div class="movies-infor">
						<div class="movies-title">
							<span class="movie-title-text">{{data.movie.name}}</span>
							<span class="movie-nums">{{data.seats.count + '张'}}</span>
						</div>
						<div class="movie-time">{{data.show.showTime}}</div>
						<div class="movie-location">
						{{data.seats.hallName}}
						<span v-for="item in data.seats.list">
							<!-- {{item}} -->
							{{item.rowId + '排'}}
							{{item.columnId + '座'}}
						</span>
						</div>
					</div>
				</div>
				<div class="movie-foot">
					<div class="movie-foot-infor">
						总价：
						<span>{{data.order.sellMoney + '元'}}</span>							
					</div>
					<div class="movie-type">已完成</div>
				</div>
			<!-- </div> -->

		</div>
	</div>
</template>


<script>
	import axios from 'axios'
	import Vue from 'vue'
	import Vant from 'vant'
	import 'vant/lib/index.css'

	Vue.use(Vant);

	Vue.filter('newImg', function(data) {
		return data.replace('w.h', '114.116');
	});

	export default {
		data () {
			return {
				datalist: [],
			}
		},

		methods: {
			cinemaDetail (data) {
				console.log(data);
				this.$router.push(`/show?cinemaId=${data}`);
			}
		},

		mounted () {
			axios({
				type: 'get',
				url: '/myfilmslists.json',
			}).then(res=>{
				console.log(res.data);
				this.datalist = res.data.orderlist
			})
		}
	};
</script>


<style lang="scss" scoped>
	* {
		margin: 0;
		padding: 0;
	}
	header {
		width: 100%;
		height: 50px;
		background: #DF2D2D;
		display: flex;
		a {
			display: block;
			line-height: 50px;
			width: 50px;
			text-align: center;
			i {
				font-size: 25px;
				line-height: 50px;
				color: #fff;
			}
		};
		a:hover {
			opacity: .1;
			background: black;
		}
		p {
			flex: 1;
			span {
				display: block;
				line-height: 50px;
				text-align: center;
				font-size: 18px;
				color: #fff;
			}
		}
		.hidebox {
			width: 50px;
			height: 100%;
			background: #DF2D2D; 
		}
	}
	
	#list-all {
		width: 100%;
		height: 185px;
		padding: 0 10px;
		margin-bottom: 5px;
		border-bottom: 10px solid #f3f3f3;
		.cinemas {
			width: 100%;
			height: 40px;
			border-bottom: 1px solid #ccc;
			a {
				display: inline-block;
				width: 100%;
				height: 40px;
				line-height: 40px;
				font-size: 13px;
				color: #333;
			}
		}
		.movies {
			width: 100%;
			height: 80px;
			margin: 10px 0;
			display: flex;
			img {
				display: block;
				height: 80px;
			}
			.movies-infor {
				margin-left: 15px;
				.movies-title {
					margin-top: 3px;
					.movie-title-text {
						font-size: 15px;
					}
					.movie-nums {
						display: inline-block;
						margin-left: 15px;
						margin-bottom: 10px;
					}
				}
				.movie-time {
					color: #888888;
					font-size: 13px;
					margin-bottom: 3px;
				}
				.movie-location {
					color: #888888;
					font-size: 13px;
				}
			}
		}
		.movie-foot {
			width: 100%;
			height: 45px;
			display: flex;
			justify-content: space-between;
			line-height: 45px;
			border-top: 1px solid #ccc;
			.movie-foot-infor {
				font-size: 14px;
				color: #888888;
			}
			.movie-type {
				font-size: 13px;
				color: #333;
				margin-right: 20px;
			}
		}
	}
</style>