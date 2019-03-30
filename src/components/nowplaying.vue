<template>
  <div class="container">
      <div class="items" v-for="film in filmList" @click="toTheater(film.id)">
        <img :src="rep2(rep1(film.img))" alt="">
        <section>
          <p class="title">{{film.nm}}</p>
          <div class="score">
            <span v-if="film.sc != 0">观众评: <span class="bold">{{isInteger(film.sc)}}</span></span>
            <span v-else><span class="bold">{{film.wish}}</span>人想看</span>
          </div>
          <div class="actor">主演: {{film.star}}</div>
          <div class="show-info">{{film.showInfo}}</div>
        </section>
        <div class="button-block">购票</div>
      </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        noScore: 0,
        filmList: []
      }
    },
    name: 'nowplaying',
    props: {
      msg: String
    },
    methods: {
      rep1 (str) {
        return str.replace(/http/,'https');
      },
      rep2 (str) {
        return str.replace(/w.h/, '128.180')
      },
      isInteger (num) {
        if (Math.floor(num) === num) {
          return num.toFixed(1)
        }else{
          return num
        }
      },

      // 跳页 Theaters
      toTheater(filmId){
        this.$router.push(`/Theaters/${filmId}`);
      }
    },
    computed: {

    },

    mounted () {
      axios.get('/ajax/movieOnInfoList?token=').then((res)=>{



          this.filmList = res.data.movieList
      })
    }
  }
</script>

<style scoped lang="scss">
  *{
    font-size: 14px;
    font-family: PingFangSC-Regular,Hiragino Sans GB,sans-serif;
    -webkit-touch-callout: inherit;
    -webkit-user-select: none;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  a{
    color: #333;
    text-decoration: none;
  }

  .container{
    padding-bottom: 48px;
  }

  .items{
    position: relative;
    padding: 12px 15px;
    background: #fff;
    border-bottom: 1px solid #f1f1f1;
    overflow: hidden;

    img{
      width: 64px;
      float: left;
    }

    section{
      width: 55%;
      margin-left: 74px;
      margin-right: 48px;
      padding-right: 5px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }

    .button-block{
      position: absolute;
      font-size: 12px;
      right: 25px;
      top: 0;
      bottom: 0;
      width: 47px;
      height: 28px;
      margin: auto;
      color: #fff;
      font-size: 12px;
      line-height: 28px;
      text-align: center;
      background-color: #f03d37;
      border-radius: 4px;
      white-space: nowrap;
      cursor: pointer;
      user-select: none;
    }

    p.title{
      margin-bottom: 7px;
      font-size: 17px;
      font-weight: 700;
      line-height: 24px;
    }

    span{
      margin-top: 6px;
      font-size: 13px;
      color: #666;
      line-height: 15px;
    }

    span.bold{
      font-weight: 700;
      color: #faaf00;
      font-size: 15px;
    }

    .actor,.show-info{
      margin-top: 6px;
      font-size: 13px;
      color: #666;
      line-height: 15px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
</style>
