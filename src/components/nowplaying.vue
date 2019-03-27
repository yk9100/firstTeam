<template>
  <div class="container">
      <div class="items" v-for="film in filmList">
        <img :src="rep2(rep1(film.img))" alt="">
      </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
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
      }
    },


    mounted () {
      axios.get('/ajax/movieOnInfoList?token=').then((res)=>{
          console.log(res.data.movieList)
          this.filmList = res.data.movieList
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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

</style>
