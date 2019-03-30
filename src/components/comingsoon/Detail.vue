<template>
    <div class="container">
        <header>
            <div class="before" @click="fuck()"></div>
            <div class="name">{{list.nm}}</div>
        </header>
        <div class="details">
            <div class="bg" v-bgPath="list.img"></div>
            <div class="movie-filter"></div>
            <ul class="ul1">
                <li class="li1">
                    <img :src="imgPath" alt="">
                </li>
                <li class="li2">
                    <h3 class="nm">{{list.nm}}</h3>
                    <p class="enm">{{list.enm}}</p>
                    <p class="wish">{{list.wish}}<span>人想看</span></p>
                    <p class="cat">{{list.cat}}</p>
                    <P v-if="list.fra" class="fra">{{list.fra}}/{{list.dur}}分钟</P>
                    <P v-else class="fra">{{list.dur}}分钟</P>
                    <p class="pubDesc">{{list.pubDesc}}</p>
                </li>
            </ul>
        </div>
        <div class="goupiao">
            <a href="#" @click="tiao()">特惠购票</a>
            <div class="hidde" >
                <span class="content" :class="longer?'maxheight':'minheight'" @click="fuck1()">
                        小提琴家陆松（陈晓 饰）与室内设计师文罂（杜鹃 饰）巴黎邂逅，不打不相识，彼此迷恋越陷越深。爱情之名怂恿着他们为爱再大胆一次，走出各自问题满满的情感关系。仿佛只要现任变前任，幸福就唾手可得。然而前任们也都是战士，文罂的前任郑可（华少 饰）是个理性至极的医生，陆松的前任刘娟（马苏 饰）则在情感社区开启了喋喋不休的骂战，是继续坚持对爱的信仰，还是选择放下与原谅重新开始？现代都市情感危机在北京与巴黎街头上演。越是深爱的，往往也正是痛苦的源头，爱情，像是影子，抓不住却也离不开，如影随心……
                        
                </span>
                <!-- <div class="shensuo"  :class="reverse?'shensuo1':'shensuo2'"></div> -->
            </div>
        </div>

        <div class="box">
            <ul>
                <li v-for="data in actor">
                    <img :src="data.img" alt="">
                    <p class="p1">{{data.name}}</p>
                    <p class="p2">{{data.position}}</p>
                </li>
                <li v-for="data in actor">
                        <img :src="data.img" alt="">
                        <p class="p1">{{data.name}}</p>
                        <p class="p2">{{data.position}}</p>
                    </li>
                    <li v-for="data in actor">
                            <img :src="data.img" alt="">
                            <p class="p1">{{data.name}}</p>
                            <p class="p2">{{data.position}}</p>
                        </li>
            </ul>
        </div>

        <div class="quanti">
            <p>全体演职人员</p>
            <div></div>
        </div>

        <div class="media">
            <h3>媒体库</h3>
            <div class="swiper-container">
                <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="data in media">
                    <img :src="data.img" alt="">
                </div>
                </div>
                <!-- Add Pagination -->
                <!-- <div class="swiper-pagination"></div> -->
            </div>
            <div></div>
        </div>


        <div class="media-bottom">
            
                <ul class="ul1">
                    <li class="li1">视频</li>
                    <li>
                        <span class="span1">2</span>
                        <span>></span>
                    </li>
                </ul>


                <ul class="ul2">
                    <li>视频</li>
                    <li>
                        <span class="span1">49</span>
                        <span class="span2">></span>
                    </li>
                </ul>

        </div>

        <div class="zixun">
            <p>资讯</p>
            <dl>
                <dt>
                    <img src="//p1.meituan.net/movie/d0bcbc183162d47823172df216aeb2961328947.jpg@200w_150h_1e_1c.webp" alt="">
                </dt>
                <dd>阿云嘎献声电影《双生》点燃网友超强期待，青春物语一触即发</dd>
            </dl>
        </div>

        <p class="talk">讨论</p>

        <div class="talkAll">
            <p class="jingxuan">精选</p>
            <ul>
                <li class="li1">
                    <img src="//p0.meituan.net/movie/2edb24febeb4e52b11b0ed51e873f331183328.jpg@130w_180h.webp" alt="">
                </li>
                <li class="li2">
                    <p class="nickName">张思聪我老公么么</p>
                    <p class="grade">给这部作品打了10分</p>
                    <span class="talking">
                        刘昊然和陈都灵真是长了一张青春片男女主的脸啊啊啊啊我哭了！这两副满脸的胶原蛋白的面孔是记忆里初恋的感觉了！讲真他们真是配一脸啊！这青春味的糖我磕了！这初恋CP我锁了！
                    </span>
                    <footer>
                        <span class="time">2016-07-10</span>
                        <span class="dianzan">
                            <span class="ding">顶 1362</span>
                            <span class="cai">踩 57</span>
                        </span>
                    </footer>
                </li>
            </ul>
            <ul>
                <li class="li1">
                    <img src="//p0.meituan.net/movie/2edb24febeb4e52b11b0ed51e873f331183328.jpg@130w_180h.webp" alt="">
                </li>
                <li class="li2">
                    <p class="nickName">张思聪我老公么么</p>
                    <p class="grade">给这部作品打了10分</p>
                    <span class="talking">
                        刘昊然和陈都灵真是长了一张青春片男女主的脸啊啊啊啊我哭了！这两副满脸的胶原蛋白的面孔是记忆里初恋的感觉了！讲真他们真是配一脸啊！这青春味的糖我磕了！这初恋CP我锁了！
                    </span>
                    <footer>
                        <span class="time">2016-07-10</span>
                        <span class="dianzan">
                            <span class="ding">顶 1362</span>
                            <span class="cai">踩 57</span>
                        </span>
                    </footer>
                </li>
            </ul>
            <ul>
                <li class="li1">
                    <img src="//p0.meituan.net/movie/2edb24febeb4e52b11b0ed51e873f331183328.jpg@130w_180h.webp" alt="">
                </li>
                <li class="li2">
                    <p class="nickName">张思聪我老公么么</p>
                    <p class="grade">给这部作品打了10分</p>
                    <span class="talking">
                        刘昊然和陈都灵真是长了一张青春片男女主的脸啊啊啊啊我哭了！这两副满脸的胶原蛋白的面孔是记忆里初恋的感觉了！讲真他们真是配一脸啊！这青春味的糖我磕了！这初恋CP我锁了！
                    </span>
                    <footer>
                        <span class="time">2016-07-10</span>
                        <span class="dianzan">
                            <span class="ding">顶 1362</span>
                            <span class="cai">踩 57</span>
                        </span>
                    </footer>
                </li>
            </ul>
        </div>

        <div class="box1">
            <span>查看全部</span>
            <span>252</span>
            <span>讨论</span>
        </div>


        <div class="other">
            <h3>相关电影</h3>
            <div class="swiper-container">
                <div class="swiper-wrapper">
                  <div class="swiper-slide" v-for="data in other" :key="data.id" @click="detail1(data.id)">
                      <img :src="fuck2(data.img)" alt="">
                  </div>
                </div>
                <!-- Add Pagination -->
                <!-- <div class="swiper-pagination"></div> -->
              </div>
        </div>


        <div class="download">
            <a href="#/" class="a-top">下载猫眼电影，查看更多电影信息</a>
            <p class="pp">© 猫眼电影 客服电话: <a href="#/">1010-5335</a></p>
            <p>京ICP备16022489号-1 京公网安备11010502030881号</p>
            <p>北京猫眼文化传媒有限公司</p>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import Vue from 'vue'
    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.css'

    Vue.directive('bgPath', {
        inserted: function(el, val) {},
        update: function(el, val) {
            // console.log(el.style)
            // console.log(val.value)
            // var str = val.value.replace('w.h', '71.100')
            // el.style.backgroundImage = `url(${str})`
        }

    })

    Vue.filter('myother', (data) => {
        // return data.replace('w.h', '128.180')
    })
    export default {
        data() {
            return {
                myid: this.$route.params.id,
                list: [],
                path: ``,
                imgPath: '',
                longer: false,
                reverse: false,
                actor: [],
                media: [],
                other: []
            }
        },
        mounted() {
            // this.$store.commit("hideTabbar");

            axios({
                url: `/ajax/detailmovie?movieId=${this.myid}`,
            }).then(res => {
                this.list = res.data.detailMovie
                console.log(this.list)
                this.$nextTick(() => {
                    this.smallImg();
                });
            });


            axios.get('/test.json').then(res => {
                this.actor = res.data
                console.log(res)
            })

            axios.get('/test1.json').then(res => {
                this.media = res.data
                this.$nextTick(() => {
                    var swiper = new Swiper('.swiper-container', {
                        // slidesPerView: 3,
                        // spaceBetween: 30,
                        // pagination: {
                        // el: '.swiper-pagination',
                        // clickable: true,
                        slidesPerView: 'auto',
                        // spaceBetween: 30,
                        pagination: {
                            el: '.swiper-pagination',
                            clickable: true,
                        },

                    });
                })
            })
            this.$store.commit('hideTabbar')

            axios.get(`/ajax/movieOnInfoList?token=`).then((res) => {
                this.other = res.data.movieList


                this.$nextTick(() => {
                    var swiper = new Swiper('.swiper-container', {
                        slidesPerView: 'auto',
                        // spaceBetween: 30,
                        pagination: {
                            el: '.swiper-pagination',
                            clickable: true,
                        },
                    });
                })
            })
        },

        updated() {

        },
        destroyed() {
            this.$store.commit('showTabbar')
        },
        methods: {
            fuck() {
                this.$router.push('/Movie/comingsoon')
            },
            smallImg() {
                this.imgPath = this.list.img.replace('w.h', '148.208');
            },
            fuck1() {
                this.longer = !this.longer
                this.reverse = !this.reverse
            },
            fuck2(data) {
                return data.replace('w.h', '128.180')
            },
            detail1(id) {
                this.$router.push(`/Detail/${id}`)
            },
            tiao(filmid) {
                this.$router.push(`/Theaters/1206824`)
            }
        }
    }
</script>

<style lang="scss" scoped>
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    
    .download {
        overflow: hidden;
        height: 150px;
        /* width: 100%; */
        .a-top {
            margin: 10px auto;
            line-height: 40px;
            border-radius: 5px;
            background: #e54847;
            color: white;
            display: block;
            width: 95%;
            text-align: center;
        }
        p {
            text-align: center;
            line-height: 25px;
            font-size: 12px;
            color: #999;
        }
        .pp {
            font-size: 14px;
            color: black;
            a {
                text-decoration: underline;
                color: #e54847;
            }
        }
    }
    
    .other {
        margin-top: 15px;
        height: 150px;
        background: white;
        h3 {
            text-indent: 20px;
            line-height: 40px;
            color: #555;
            font-size: 16px;
            border-bottom: 1px solid #ccc;
        }
        .swiper-wrapper {
            width: 136px;
            .swiper-slide {
                box-sizing: content-box;
                width: 70px;
                height: 90px;
                padding-left: 20px;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
    
    .box1 {
        height: 40px;
        line-height: 40px;
        background: white;
        text-align: center;
        color: #f63!important;
        font-size: 12px;
    }
    
    .talkAll {
        background: white;
        height: 100%;
        width: 100%;
        .jingxuan {
            font-size: 14px;
            font-weight: bold;
            color: #555;
            text-indent: 20px;
            line-height: 40px;
        }
        ul {
            width: 93%;
            font-size: 14px;
            color: #555;
            height: auto;
            display: table;
            margin-left: 20px;
            padding-top: 5px;
            /* padding-left: 20px; */
            /* padding-right: 10px; */
            border-bottom: 1px solid #ccc;
            .li1 {
                /* padding-left: 20px; */
                display: table-cell;
                img {
                    width: 50px;
                }
            }
            .li2 {
                display: table-cell;
                vertical-align: middle;
                padding-left: 10px;
                footer {
                    padding-top: 10px;
                    height: 50px;
                    padding-right: 5px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    .dianzan {
                        text-align: center;
                        display: flex;
                        width: 120px;
                        /* background: yellow; */
                        span {
                            display: inline-block;
                            flex: 1;
                            border-radius: 10px;
                            border: 1px solid #ccc;
                            height: 30px;
                            line-height: 30px;
                            font-size: 12px;
                        }
                        .cai {
                            margin-left: 10px;
                        }
                        .ding {
                            width: auto;
                        }
                    }
                }
            }
        }
    }
    
    .talk {
        line-height: 44px;
        background: white;
        margin-top: 15px;
        margin-bottom: 2px;
        text-indent: 20px;
        color: #555;
        font-weight: bold;
    }
    
    .zixun {
        margin-top: 15px;
        height: 134px;
        width: 100%;
        background: white;
        p {
            line-height: 40px;
            text-indent: 20px;
            color: #555;
        }
        dl {
            padding-left: 20px;
            display: table;
            dt {
                img {
                    width: 100px;
                    height: 75px;
                }
            }
            dd {
                display: table-cell;
                padding-left: 10px;
                padding-right: 30px;
                vertical-align: middle;
                position: relative;
            }
            dd::after {
                content: ">";
                position: absolute;
                right: 0;
                top: 50%;
                transform: translate(0px, -50%);
                font-size: 22px;
                right: 10px;
                color: #555;
            }
        }
    }
    
    .media-bottom {
        height: 40px;
        background: white;
        width: 100%;
        display: flex;
        font-size: 14px;
        color: #555;
        font-weight: bold;
        .ul1 {
            display: flex;
            flex: 1;
            justify-content: space-between;
            align-items: center;
            padding-right: 10px;
            .span1 {
                padding-right: 10px;
            }
            .li1 {
                padding-left: 20px;
            }
        }
        .ul2 {
            display: flex;
            flex: 2;
            justify-content: space-between;
            align-items: center;
            .span1 {
                padding-right: 10px;
            }
            .span2 {
                padding-right: 10px;
            }
        }
    }
    
    div.media {
        background: white;
        width: 100%;
        height: 120px;
        .swiper-wrapper {
            // padding-left:20px;
            .swiper-slide {
                margin-right: 15px !important;
                width: 100px;
                box-sizing: content-box;
                img {
                    width: 100%;
                    height: 64px;
                }
            }
            .swiper-slide:first-child {
                padding-left: 20px;
            }
        }
        h3 {
            text-indent: 20px;
            line-height: 40px;
            color: #555;
            font-size: 16px;
        }
    }
    
    .quanti {
        width: 100%;
        display: flex;
        height: 40px;
        justify-content: space-between;
        overflow: hidden;
        // line-height: 40px;
        align-items: center;
        padding-right: 20px;
        background: white;
        margin-bottom: 15px;
        div {
            height: 10px;
            width: 10px;
            border-top: 2px solid #555;
            border-right: 2px solid #555;
            transform: rotate(45deg);
        }
        p {
            font-size: 14px;
            color: #555;
            text-indent: 15px;
        }
    }
    
    .container {
        background: #f4f4f4;
        /* height: 2000px; */
    }
    
    div.box {
        width: 100%;
        height: 150px;
        background: white;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        ul {
            padding: 10px 0px 10px 15px;
            list-style: none;
            width: 100%;
            height: 150px;
            overflow-x: scroll;
            overflow-y: hidden;
            white-space: nowrap;
            li {
                font-size: 8px;
                width: 100px;
                height: 130px;
                display: inline-block;
                text-align: center;
                img {
                    width: 70px;
                    float: left;
                }
                p {
                    width: 70px;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                }
            }
        }
    }
    
    header {
        display: flex;
        height: 50px;
        background: #e54847;
        text-align: center;
        line-height: 48px;
        .before {
            width: 20px;
            height: 20px;
            border-top: 2px solid white;
            border-left: 2px solid white;
            transform: rotate(-45deg) translate(2px, 22px);
        }
        .name {
            width: 80%;
            color: white;
            padding-left: 40px;
        }
    }
    
    .details {
        position: relative;
        height: 182px;
        overflow: hidden;
        div.bg {
            width: 100%;
            height: 182px;
            z-index: 0;
            filter: blur(.6rem);
            -webkit-filter: blur(.6rem);
            background-size: cover;
            background-image: gray;
            background-repeat: no-repeat;
            background-position-y: 40%;
        }
        .movie-filter {
            top: 0;
            right: 0;
            width: 100%;
            position: absolute;
            left: 0;
            bottom: 0;
            background-color: #40454d;
            opacity: .55;
        }
        .ul1 {
            width: 90%;
            height: 150px;
            position: absolute;
            transform: translate(-50%, -50%);
            top: 50%;
            left: 50%;
            list-style: none;
            .li1 {
                height: 100%;
                width: 105px;
                float: left;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .li2 {
                float: left;
                padding-left: 12px;
                line-height: 25px;
                .nm {
                    color: white;
                    font-size: 20px;
                }
                .enm {
                    color: #ccc;
                    font-size: 8px;
                }
                .wish {
                    color: #f3c202;
                    font-size: 14px;
                    font-weight: bold;
                }
                .cat {
                    font-size: 8px;
                    color: #ccc;
                }
                .fra {
                    font-size: 14px;
                    color: #ccc;
                }
                .pubDesc {
                    font-size: 8px;
                    color: #ccc;
                }
            }
        }
    }
    
    .goupiao {
        width: 100%;
        /* background: pink; */
        text-align: center;
        padding: 15px;
        background: #fff;
        margin-bottom: 15px;
        a {
            display: block;
            margin: 0 auto;
            width: 90%;
            height: 36px;
            background: #e54847;
            line-height: 36px;
            border-radius: 4px;
            color: white;
            margin-bottom: 15px;
        }
        .hidde {
            width: 90%;
            margin: 0 auto;
            overflow: hidden;
            text-align: justify;
            .content {
                position: relative;
                display: block;
                box-sizing: content-box;
                overflow: hidden;
            }
            .shensuo {
                width: 12px;
                height: 12px;
                border-left: 3px solid #ccc;
                border-bottom: 3px solid #ccc;
                /* transform: translate(-50%, -10px) rotate(-45deg); */
            }
            .content {
                font-size: 15px;
                color: #555;
            }
        }
    }
    
    .minheight {
        height: 60px;
        line-height: 20px;
        font-size: 16px;
    }
    
    .maxheight {
        line-height: 20px;
        height: auto;
    }
    
    .shensuo1 {
        transform: translate(-50%, 0px) rotate(135deg);
    }
    
    .shensuo2 {
        transform: translate(-50%, 0px) rotate(-45deg);
        /* top: 20px; */
    }
</style>