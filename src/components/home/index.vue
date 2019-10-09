<template>
  <div class="home-container">
    <div class="tab-container">
      <div class="tab-header" style="display: flex;justify-content: space-between;align-items: center;padding: 0 .2rem;">
        <div class="slider" style="width: .5rem;"><i class="iconfont icongengduo"></i></div>
        <mt-navbar class="page-part" v-model="selected" style="width: 6.5rem;">
          <mt-tab-item id="1">我的</mt-tab-item>
          <mt-tab-item id="2">发现</mt-tab-item>
          <mt-tab-item id="3">朋友</mt-tab-item>
          <mt-tab-item id="4">视频</mt-tab-item>
        </mt-navbar>
        <div class="search-icon" style="width: .5rem;" @click="searchHandler"><i class="iconfont iconsousuo"></i></div>
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


  </div>
</template>
<script>
  import MyCenter from './my'
  import FindCenter from './find'
  import FriendCenter from './friends'
  import VideoCenter from './video'
  export default {
    name: 'home',
    components:{
      MyCenter,
      FindCenter,
      FriendCenter,
      VideoCenter

    },
    data() {
      return {
        selected: '1'

      }
    },
    methods:{
      searchHandler() {
        this.$router.push({
          path:'/search'
        })
      }
    }
  }
</script>
