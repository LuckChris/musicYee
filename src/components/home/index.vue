<template>
  <div class="home-container">
    <div class="tab-container">
      <div class="tab-header" style="display: flex;justify-content: space-between;align-items: center;padding-left: .2rem;">
        <div class="slider" style="width: .5rem;"><i class="iconfont icongengduo"></i></div>
        <mt-navbar class="page-part" v-model="selected" style="width: 7rem;">
          <mt-tab-item id="1">我的</mt-tab-item>
          <mt-tab-item id="2">发现</mt-tab-item>
          <mt-tab-item id="3">朋友</mt-tab-item>
          <mt-tab-item id="4">视频</mt-tab-item>
          <mt-tab-item id="5"><i class="iconfont iconsousuo"></i></mt-tab-item>
        </mt-navbar>
      </div>
      <!-- tab-container -->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <mt-cell v-for="n in 10" :title="'内容 ' + n"></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <mt-cell v-for="n in 4" :title="'测试 ' + n"></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <mt-cell v-for="n in 6" :title="'选项 ' + n"></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="4">
          <mt-cell v-for="n in 6" :title="'选项 ' + n"></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="5">
          <mt-cell v-for="n in 6" :title="'选项 ' + n"></mt-cell>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>


  </div>
</template>
<script>
  export default {
    name: 'home',
    data() {
      return {
        selected: '1'

      }
    }
  }
</script>
