<template>
  <div class="my-container">
    <div class="banner-div">
      <mt-swipe :auto="4000" >
        <mt-swipe-item v-for="item in bannerList">
          <div class="banner-wrapper">
            <img :src="item.pic" alt="" class="banner-img">
          </div>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="types-div">

    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        bannerList: [] // 轮播图列表

      }
    },
    mounted() {
      this.getBanner()

    },
    methods:{
      getBanner() {
        let _params ={
          type: 1
        }
        this.http.send({ command: '/banner', params: _params})
          .then((res) => {
            this.bannerList = res.banners
          })
      }
    }
  }
</script>
<style lang="less">
  .my-container{
    width: 100%;
  }
  .banner-div{
    width: 100%;
    height: 3rem;
    background: pink;
  }
  .banner-wrapper{
    width: 95%;
    height: 95%;
    border-radius: .2rem;
    background: #42b983;
    overflow: hidden;
    margin: 1% auto 0;

  }
  .banner-img{
    width: 100%;
    height: 100%;

  }
</style>
