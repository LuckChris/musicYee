<template>
  <div class="my-container">
    <div class="my-container-top">
      <ul class="icon-list-wrapper">
        <li class="icon-list" v-for="item in 12">
          <span class="cricle"></span>
          <span>私藏推荐</span>
        </li>
      </ul>
    </div>
    <div class="my-container-middle">
      <ul>
        <li class="list-item" v-for="(item,index) in containerList" :key="index" @click="clickHander(item.id)">
          <i class="iconfont ye-font-size-60 ye-color5 icon" :class="item.icon"></i>
          <span class="ye-font-size-30 ye-color5">{{item.name}}</span>
          <span class="list-item-num">(0)</span>
        </li>
      </ul>
    </div>
    <div class="line ye-background1"></div>
    <div class="my-container-bottom">
      <div class="song-list-title">
        <div>
           <i class="iconfont icongedan ye-font-size-50 ye-color6"></i>
          <span style="margin-left:.1rem" class="ye-font-size-32 ye-color5 ye-font-bold">创建的歌单</span>
          <span>(0)</span>
        </div>
        <div>
          <i class="iconfont iconjiahao ye-font-size-42" @click="createSongList"></i>
          <i class="iconfont iconDMiconzhuanqu- ye-font-size-42"></i>
        </div>       
      </div>
      <div class="song-list">       
        <div class="song-list-left">
          <div class="list-cover"><i class="iconfont iconaixin ye-font-size-42 ye-color3"></i></div>
          <div class="like-songs"><p class="ye-color5 ye-font-size-32">我喜欢的音乐</p><p>0首</p></div>
        </div>      
        <div class="song-list-right"><i class="iconfont iconxindongshiyanxiao"></i><span>心动模式</span></div>
      </div>
   
     


    </div>
    <mt-popup v-model="popupVisible" popup-transition="popup-fade">
      <div class="create-songs-popup">
        <p class="ye-color5 ye-font-size-32" style="margin-bottom:.2rem;">新建歌单</p>
        <input type="text" placeholder="请输入歌单名称" class="input-box">
        <div class="create-div2">
          <div >
            <input type="checkbox">
            <span class="ye-color5 ">设置为隐私歌单</span>
          </div>
          <div>
            <span>0/40</span>
          </div>
        </div>      
        <div class="create-div3">
          <span  style="margin-right:.5rem;" @click="cancel">取消</span>
          <span class="ye-color2">提交</span>
        </div>
        
      </div>
    </mt-popup>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        containerList : [
          {id: 1,icon: 'iconyinle',name:'本地音乐'},
          {id: 2,icon: 'iconzuijinbofang',name:'最近播放'},
          {id: 3,icon: 'iconxiazai',name:'下载管理'},
          {id: 4,icon: 'iconwodediantai',name:'我的电台'},
          {id: 5,icon: 'iconwodeshoucang',name:'我的收藏'},
        ],
        popupVisible: false

      }
    },
    methods: {
      // 点击
      clickHander(id) {

      },

      // 创建歌单
      createSongList() {
        this.popupVisible = true
      },
      cancel() {
        this.popupVisible = false
      }
    }
  }
</script>
<style lang="less" scoped>
.my-container-top{
  width: auto;
  height:1.8rem;
  overflow: hidden;
  
}
.cricle{
  display: inline-block;
  width: .8rem;
  height: .8rem;
  border-radius: 50%;
  margin-top: .3rem;
  background: linear-gradient(to right, #ff5a4c, #ff1d11);
}
.icon-list-wrapper{
  display: flex;
  min-width: 100%;
  flex-wrap: nowrap;
  overflow-x: auto;
  white-space: nowrap;
  // 移动设备滚动回弹效果
  -webkit-overflow-scrolling: touch;
}
// 隐藏横向滚动条
.icon-list-wrapper::-webkit-scrollbar {
  display: none;

}
.icon-list{
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  min-width: 1.6rem;
}
.my-container-middle{
  margin-top: .5rem;

}
.list-item{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: .3rem;
}
.icon{
  margin: 0 .4rem;
}
.list-item-num{
  margin-left: .1rem;
  margin-top: .1rem;
}
.line{
  width: 100%;
  height: .1rem;
}
.song-list-title{
  display: flex;
  justify-content: space-between;
  margin: .5rem .2rem 0;
}
.song-list{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: .5rem .2rem 0;
}
.song-list-left{
  display: flex;
  align-items: center;
}
.list-cover{
  width: 1rem;
  height: 1rem;
  border-radius: .11rem;
  line-height: 1rem;
  text-align: center;
  background: rgba(0, 0, 0, .7);
  margin-right: .3rem;
}
.song-list-right{
  border: 1px solid #ccc;
  border-radius: 1rem;
  letter-spacing: 0.05rem;
  padding: 0.1rem 0.1rem 0.1rem 0.13rem;
  box-sizing: border-box;
  font-size: .2rem;
  text-align: center;
  display: flex;
  align-items: center;
}
.create-songs-popup{
  width: 90vw;
  border-radius: .15rem;
  padding: .3rem;
  box-sizing: border-box;
}
.input-box{
  width: 100%;
  border: none;
  border-bottom: 1px solid #999;
  padding: .1rem 0;
}
.input-box:focus{
  outline: none;
}
.create-div2{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: .2rem;
}
.create-div3{
  float:right;
  margin-top: .5rem;
  margin-bottom: .5rem;
}
</style>
