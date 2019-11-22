<template>
  <div class="my-container">
    <div class="banner-div">
      <mt-swipe :auto="4000" >
        <mt-swipe-item v-for="(item,index) in bannerList" :key="index">
          <div class="banner-wrapper">
            <img :src="item.pic" alt="" class="banner-img">
          </div>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!-- 今日推荐icon部分    -->
    <div class="types-div ye-borderColor">
      <div class="type-item-div ye-flex-center">
        <div style=" text-align: center;position: relative;" v-for="(item,index) in typesList" :key="index">
          <div class="icon-wrapper  icon-bgColor" >
            <i class="iconfont ye-color3 type-icon  ye-font-size-60" :class="item.icon"></i>
          </div>
          <p class="ye-font-size-28">{{item.title}}</p>
          <span class="now-days ye-color3" v-if="index == 0">{{nowDay}}</span>
        </div>
      </div>
    </div>
  <!-- 推荐歌曲   -->
    <div class="recommend-songs-title ye-flex-center">
      <p class="recommend-title title-color ye-font-size-34">推荐歌单</p>
      <span class="ye-font-size-28">歌单广场</span>
    </div>
    <div class="Recommended-songs ye-flex-center">
      <div class="songs-list" v-for="(song,index) in recommendSongsList" @click="songsItemClick(index)" :key="index">
        <div class="song-img" style="width: 2.2rem;height: 2.2rem;border-radius: .2rem;overflow: hidden;">
          <img :src="song.picUrl" alt="" style="width: 2.2rem;height: 2.2rem;">
        </div>
        <span class="number ye-color3">{{song.trackCount}}万</span>
        <p class="ye-more-text-over songs-item-desc">{{song.name}}</p>
      </div>
    </div>
<!--    新碟-->
    <div class="new-album-content ">
      <div class="ye-flex-center">
        <div >
          <span @click="chooseItem(1)" class="title-color" :class="chooseId == 1 ? 'active-span':''">新碟</span>
          <span style="padding: 0 .1rem;">|</span>
          <span  @click="chooseItem(2)" class="title-color" :class="chooseId == 2 ? 'active-span':''">新歌</span>
        </div>
        <p class="ye-font-size-28 more">更多新碟</p>
      </div>
      <div class="album-list ye-flex-center" >
        <div class="album-item"  v-for="(song,index) in recommendSongsList">
          <div style="width: 2.2rem;height: 2.2rem;border-radius: .2rem;overflow: hidden;">
            <img :src="song.picUrl" alt="" style="width: 2.2rem;height: 2.2rem;">
          </div>
          <p class="ye-more-text-over album-name">{{song.name}}</p>
          <p>yee</p>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
  import api from '@/api/index'
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
        ],
        nowDay:'',
        recommendSongsList: [], // 首页推荐歌单
        chooseId: 1, // 新碟or 新歌
        albumList:[], // 新碟列表

      }
    },
    mounted() {
      this.getBanner()
      this.nowDay = new Date().getDate()
      this.getRecommendSong()
      this.getAlbumList()

    },
    methods:{
      // 获取首页banner图
      getBanner() {
        let _params ={
          type: 1
        }
        api.getBanner(_params)
          .then((res) => {
            this.bannerList = res.banners
          })
      },
      // 获取首页推荐歌单
      getRecommendSong() {
        let _params = {
          limit: 6
        }
       api.getPersonalized(_params)
          .then(({result}) => {
            this.recommendSongsList = result
          })
      },
      // 跳转歌单播放列表
      songsItemClick(id) {
        this.$router.push({
          path:'/songsList',
          query:{
            id:id
          }
        })
      },
      // 新歌or新碟
      chooseItem(id) {
        this.chooseId = id
      },
      getAlbumList() {
        // albumList  /album?id=32311&limit=30  83594819
        let _params ={
          limit : 6,
        }
       api.getNewAlbum(_params)
          .then(({albums}) => {
            this.albumList = albums
          })
      }
    }
  }
</script>
<style lang="less">
  @fontSize36:.36rem;
  @blackColor: #000;
  .my-container{
    width: 100%;
    padding: 0 .25rem;
    box-sizing: border-box;
  }
  .banner-div{
    width: 100%;
    height: 3rem;
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
    padding: .3rem .2rem;box-sizing: border-box;border-bottom: 1px solid;
    .type-item-div{
      .icon-wrapper{
        width: 1rem;height: 1rem;border-radius: 50%;display: table;text-align: center;
        position: relative;
        .type-icon{
          display: table-cell; vertical-align: middle;
        }
      }
      .now-days{
        position: absolute;top:.43rem;left: 46%;transform: translateX(-50%)
      }
    }
  }
  .recommend-songs-title{
    margin: .3rem 0 0;
    .recommend-title{
      font-weight: bold;
    }
    span{
      border: 1px solid;
      padding: .05rem;
      border-radius: .5rem;
    }
  }
  .Recommended-songs{
    margin: .3rem 0 ;
    flex-wrap: wrap;

    .songs-list{
      width: 2.2rem;
      height: 3rem;
      position: relative;
      overflow: hidden;
      margin-bottom: .4rem;
      .number{
        position: absolute;
        right:.1rem;
        top: .1rem;
      }
      .songs-item-desc{
        width: 2.2rem;
        -webkit-line-clamp: 2;
      }
    }
  }
 .active-span{
   font-weight: bold;
   font-size: @fontSize36;

 }
  .more {
    border: 1px solid;
    padding: .05rem;
    border-radius: .5rem;
  }
  .album-list{
    flex-wrap: wrap;
    margin-top: .4rem;

  }
  .album-item{
    width: 2.2rem;
    overflow: hidden;
    margin-bottom: .3rem;
  }
  .album-name{
    width: 2.2rem;
    -webkit-line-clamp: 1;
  }

</style>
