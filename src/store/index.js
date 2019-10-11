import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  state:{
    showSlider: false // 是否展示侧边栏

  },
  mutations: {
    modifySlider(state, value) {
      state.showSlider = value
    }

  }
})
