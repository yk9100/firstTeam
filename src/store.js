import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	isTabbarShow: true,
    isButtonShow: false,
  },

  mutations: {
  	hideTabbar(state){
  		state.isTabbarShow = false
  	},

  	showTabbar(state){
  		state.isTabbarShow = true
  	},

    buttonShow (state) {
      state.isButtonShow = true
    },
    buttonHide (state) {
      state.isButtonShow = false
    }
  },
  actions: {

  }
})
