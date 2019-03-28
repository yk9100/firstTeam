import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	isTabbarShow:true
  },
  mutations: {
  	hideTabbar(state){
  		state.isTabbarShow = false
  	},
  	showTabbar(state){
  		state.isTabbarShow = true
  	}
  },
  actions: {

  }
})
