import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  state:{
    showSlider: false, // 是否展示侧边栏
    settingColor: true // 白天夜晚模式 默认展示白天

  },
  mutations: {
    // 展示左边菜单栏
    modifySlider(state, value) {
      state.showSlider = value
    },

    // 修改白天夜晚模式
    modifyTheme(state,value) {
      state.settingColor = value
    }

  }
})
