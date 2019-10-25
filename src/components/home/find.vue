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
      <div class="type-item-div">
        <div style=" text-align: center;" v-for="item in typesList">
          <div class="icon-wrapper icon-bgColor" >
            <i class="iconfont  type-icon ye-font-size-60" :class="item.icon"></i>
          </div>
          <p class="ye-font-size-28">{{item.title}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        bannerList: [], // 轮播图列表
        typesList: [
          {title:'每日推荐',icon:'iconrili'},
          {title:'歌单',icon:'icongedan'},
          {title:'排行榜',icon:'iconicon-paihangbangx'},
          {title:'电台',icon:'iconwodediantai'},
          {title:'直播',icon:'iconzhibo'},
        ]

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
  .types-div{
    padding: .3rem .2rem;box-sizing: border-box;
    .type-item-div{
      display: flex;justify-content: space-between;align-items: center;
      .icon-wrapper{
        width: 1rem;height: 1rem;border-radius: 50%;display: table;text-align: center;
        .type-icon{
          display: table-cell; vertical-align: middle;color: white
        }
      }
    }
  }

</style>
