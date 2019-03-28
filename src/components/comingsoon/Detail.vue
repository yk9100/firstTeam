<template>
    <div>
        <header></header>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            myid:this.$route.params.id
        }
    },
    mounted(){
        // this.$store.commit("hideTabbar");
        axios({
            url: '/movie/1206824?_v_=yes&channelId=4&cityId=65&$from=canary',
            method: 'head',
        }).then(res=> {
            console.log(res.data)
        });
    }
}
</script>

<style lang="scss" scoped>

</style>
