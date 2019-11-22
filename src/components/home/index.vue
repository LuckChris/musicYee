<template>
  <div class="home-container">
    <div class="tab-container">
      <div class="tab-header flex-between-center">
        <div class="slider" style="width: .5rem;" @click="showSliderHandler"><i class="iconfont icongengduo ye-font-size-32"></i></div>
        <mt-navbar class="page-part" v-model="selected" style="width: 6.5rem;">
          <mt-tab-item id="1">我的</mt-tab-item>
          <mt-tab-item id="2">发现</mt-tab-item>
          <mt-tab-item id="3">朋友</mt-tab-item>
          <mt-tab-item id="4">视频</mt-tab-item>
        </mt-navbar>
        <div class="search-icon" style="width: .5rem;" @click="searchHandler"><i class="iconfont iconsousuo ye-font-size-32"></i></div>
      </div>
      <!-- tab-container -->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <MyCenter></MyCenter>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
         <FindCenter></FindCenter>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <FriendCenter></FriendCenter>
        </mt-tab-container-item>
        <mt-tab-container-item id="4">
          <VideoCenter></VideoCenter>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>

<!--    注意这里不需要写v-if或者v-show 否则的话mint-popup的动画效果会失效-->
    <HomeSlider></HomeSlider>

  </div>
</template>
<script>
  import MyCenter from './my'
  import FindCenter from './find'
  import FriendCenter from './friends'
  import VideoCenter from './video'
  import HomeSlider from '@/components/Slider/index'
  export default {
    name: 'home',
    components:{
      MyCenter,
      FindCenter,
      FriendCenter,
      VideoCenter,
      HomeSlider

    },
    data() {
      return {
        selected: '2',

      }
    },
    mounted() {
      this.util.set('test','aaaaa')

    },
    methods:{
      // 搜索
      searchHandler() {
        this.$router.push({
          path:'/search'
        })
      },

      // 展示左边侧边栏
      showSliderHandler() {
        this.$store.commit('modifySlider', true)
      }
    }
  }
</script>
<style lang="less">
  .tab-header{
    padding: 0 .2rem;margin-bottom: .2rem;
  }


</style>
