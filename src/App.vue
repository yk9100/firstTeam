<template>
  <div id="app">
    <tabbar></tabbar>
    <router-view></router-view>
  </div>
</template>
<script>
  import tabbar from './components/Tabbar.vue';
  export default {
  	components: {
  			tabbar,
  		}
  }
</script>
<style lang="scss">
	*{
		margin:0;
		padding:0;
	}
</style>
