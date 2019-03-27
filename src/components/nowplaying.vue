<template>
  <div class="container">
      
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


    mounted () {
      axios.get('/ajax/movieOnInfoList?token=').then((res)=>{
          console.log(res.data.movieList)
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
