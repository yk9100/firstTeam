<template>
<<<<<<< HEAD
  <div>
		<p class="p1">近期最受期待</p>
			<div class="swiper-container">
					<div class="swiper-wrapper">
							<div class="swiper-slide" v-for="data in list" :key="data.id" @click="detail(data.id)">
								<img :src="data.img |newImg">
								<span class="wish-bg"></span>
								<span class="span1">{{data.wish}} 人想看</span>
								<p class="p2">{{data.nm}}</p>
								<p class="p3">{{data.comingTitle | newDate}}</p>
							</div>
							<!-- <div class="swiper-slide" v-for="data in list1" :key="data.id">
								<img :src="data.img |newImg">
								<span class="wish-bg"></span>
								<span class="span1">{{data.wish}} 人想看</span>
								<p class="p2">{{data.nm}}</p>
								<p class="p3">{{data.comingTitle | newDate}}</p>
							</div> -->
					</div>
			</div>
			

			<div class="gun"></div>


			<ul class="ul1">
				<p v-if="nextList.length" class="p_top">{{nextList[0].comingTitle}}</p>
				<li v-for="item in nextList" :key="item.id">
					<img :src="item.img |newImg" alt="">
					<div class="rightBox">
						<p class="nm">{{item.nm}}</p>
						<p class="wish">{{item.wish}}<span>人想看</span></p>
						<p class="star">主演: {{item.star}}</p>
						<p class="rt">{{item.rt}}上映</p>
						<span class="btn" v-if="item.showInfo">预售</span>
						<span class="btn1" v-else>想看</span>
					</div>
				</li>
			</ul>


			<ul class="ul1">
				<p v-if="nextList2.length" class="p_top">{{nextList2[0].comingTitle}}</p>
				<li v-for="item in nextList2" :key="item.id">
					<img :src="item.img |newImg" alt="">
					<div class="rightBox">
						<p class="nm">{{item.nm}}</p>
						<p class="wish">{{item.wish}}<span>人想看</span></p>
						<p class="star">主演: {{item.star}}</p>
						<p class="rt">{{item.rt}}上映</p>
						<span class="btn" v-if="item.showInfo">预售</span>
						<span class="btn1" v-else>想看</span>
					</div>
				</li>
			</ul>

			<ul class="ul1">
				<p v-if="nextList3.length" class="p_top">{{nextList3[0].comingTitle}}</p>
				<li v-for="item in nextList3" :key="item.id">
					<img :src="item.img |newImg" alt="">
					<div class="rightBox">
						<p class="nm">{{item.nm}}</p>
						<p class="wish">{{item.wish}}<span>人想看</span></p>
						<p class="star">主演: {{item.star}}</p>
						<p class="rt">{{item.rt}}上映</p>
						<span class="btn" v-if="item.showInfo">预售</span>
						<span class="btn1" v-else>想看</span>
					</div>
				</li>
			</ul>

			<ul class="ul1">
				<p v-if="nextList4.length" class="p_top">{{nextList4[0].comingTitle}}</p>
				<li v-for="item in nextList4" :key="item.id">
					<img :src="item.img |newImg" alt="">
					<div class="rightBox">
						<p class="nm">{{item.nm}}</p>
						<p class="wish">{{item.wish}}<span>人想看</span></p>
						<p class="star">主演: {{item.star}}</p>
						<p class="rt">{{item.rt}}上映</p>
						<span class="btn" v-if="item.showInfo">预售</span>
						<span class="btn1" v-else>想看</span>
					</div>
				</li>
			</ul>
=======
	<div class="comingsoon">
		
>>>>>>> refs/remotes/origin/master
	</div>
</template>

<script>
<<<<<<< HEAD
  import Vue from 'vue'
	import axios from 'axios'
	import Swiper from 'swiper'
	import 'swiper/dist/css/swiper.css'
  
  Vue.filter('newImg',(data)=>{
	 return data.replace('w.h','170.230')
	})
	
	Vue.filter('newDate',(data)=>{
		return data.split(' ')[0]
  })
  
  export default {
    data () {
      return {
				list: [],
				list1:[],
				nextList:[],
				nextList2:[],
				nextList3:[],
				nextList4:[]
      }
    },
    methods:{
			detail(id){
				this.$router.push(`/Detail/${id}`)
			}
		},
    mounted () {
      axios.get('/ajax/mostExpected?ci=65&limit=10&offset=0&token=').then((res)=>{
			this.list = res.data.coming
			this.$nextTick(()=>{
				var swiper = new Swiper('.swiper-container', {
						slidesPerView: 4,
						spaceBetween: 35,
						freeMode: true,
						pagination: {
							el: '.swiper-pagination',
							clickable: true,
						},
					});
			})
			})

			// axios.get('/ajax/mostExpected?ci=65&limit=10&offset=10&token=').then((res)=>{
			// 	this.list1 = res.data.coming
			// 	console.log(res.data.coming)
			// })
			
			axios.get('/ajax/comingList?ci=65&token=&limit=10').then((res)=>{
				// console.log(res.data.coming)
				this.nextList = res.data.coming
			})

			axios.get('/ajax/moreComingList?ci=65&token=&limit=10&movieIds=1206939%2C248123%2C342867%2C245881%2C1217497%2C1229702%2C1239407%2C1239171%2C345030%2C1230119').then((res)=>{
				// console.log(res.data.coming)
				this.nextList2 = res.data.coming
			})

			axios.get('/ajax/moreComingList?ci=65&token=&limit=10&movieIds=1207185%2C343344%2C1213175%2C1239678%2C1156894%2C1257272%2C1236912%2C1260846%2C1206415%2C345621').then((res)=>{
				// console.log(res.data.coming)
				this.nextList3 = res.data.coming
			})

			axios.get('/ajax/moreComingList?ci=65&token=&limit=10&movieIds=1207260%2C1162868%2C1233852%2C581264%2C1263399%2C1263355%2C672279%2C1238885%2C1230152%2C1227891').then((res)=>{
				// console.log(res.data.coming)
				this.nextList4 = res.data.coming
			})
		}
  }
=======
	export default{

	}
>>>>>>> refs/remotes/origin/master
</script>

<style scoped lang="scss">
<<<<<<< HEAD
*{
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}
.p1{
	font-size: 14px;
}
.swiper-container{
	height:186px;
	width:100%;
	margin-left:20px;
	display: flex;
	.swiper-wrapper{
		width:100%;
		.swiper-slide{
			position: relative;
			img{
				width: 90px;
				height: 125px;
			}

			span.wish-bg{
				position: absolute;
				width: 90px;
				height: 125px;
				top:-1px;
				left:0;
				// background-image: -webkit-linear-gradient(top,rbga(77,77,77,0), #000);
				// background-image: linear-gradient(-180deg,rbga(77,77,77,0), #000);
				background: rgba($color: #000000, $alpha: 0.3)
			}
			.span1{
				position: absolute;
				font-weight: bold;
				left:4px;
				top:108px;
				font-size: 8px;
				color:#faaf00;
				width: 90px;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			.p2{
				font-size: 8px;
				padding-bottom: 5px;
				padding-top: 5px;
				width:90px;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				font-weight: bold;
			}
			.p3{
				font-size: 8px;
				color:#999;
			}
		}

	}
	
}
.p1{
		line-height: 40px;
		padding-left: 16px;
	}
	.gun{
		height: 10px;
		width:95%;
		background:#f5f5f5;
	}
	ul.ul1{
		padding-left:18px;
		list-style: none;
		p.p_top{
			line-height: 40px;
			font-size: 14px;
			text-shadow: -1px -1px 1px #666;
		}

		li{
			overflow: hidden;
			padding-bottom: 20px;
			img{
				width: 70px;
				height: 100px;
				float: left;
			}
			.rightBox{
				position: relative;
				z-index: -1;
				height: 115px;
				line-height:26px;
				// background:#faaf00;
				width:74%;
				float: right;
				margin-right:20px;
				border-bottom:1px solid #ccc;
				.nm{
					font-weight: bold;
				}
				.rt{
					font-size: 12px;
					color:#666;
				}
				.star{
					font-size: 12px;
					color:#666;
					width:200px;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
				.btn{
					position: absolute;
					right:12px;
					top:35px;
					font-size: 12px;
					width: 50px;
					height: 28px;
					background:#3c9fe6;
					color:white;
					border-radius: 4px;
					line-height: 28px;
					text-align: center;
				}
				.btn1{
					position: absolute;
					right:12px;
					top:35px;
					font-size: 12px;
					width: 50px;
					height: 28px;
					background:#faaf00;
					color:white;
					border-radius: 4px;
					line-height: 28px;
					text-align: center;
				}
				.wish{
					color:#faaf00;
					font-weight: bold;
					span{
						font-size: 12px;
						font-weight: normal;
						color:#666;
					}
				}
			}
		}
	}
=======

>>>>>>> refs/remotes/origin/master
</style>