<template>
  <div class="slider-container">
    <mt-popup v-model="$store.state.showSlider"  position="left"  >
      <div style="height: 100%;overflow: scroll">
        <div class="slider-header">
          <div style="text-align: center;padding-top: .6rem; " class="ye-color1">
            <p >登录网易云音乐</p>
            <p style='padding: .1rem 0 .3rem;'>手机电脑多端同步，尽享海量高品质音乐</p>
            <mt-button type="default" @click="toLogin">立即登录</mt-button>
          </div>
        </div>
        <div class="slider-div1 ye-borderColor">
          <div class="flex-between-center">
            <div class="text-center">
              <i class="iconfont iconenvelope ye-font-size-50 ye-color2"></i>
              <p>我的消息</p>
            </div>
            <div class="text-center">
              <i class="iconfont iconperson ye-font-size-50 ye-color2"></i>
              <p>我的好友</p>
            </div>
            <div class="text-center">
              <i class="iconfont iconhuanfu ye-font-size-50 ye-color2"></i>
              <p>个性皮肤</p>
            </div>
            <div class="text-center">
              <i class="iconfont icontinggeshiqu ye-font-size-50 ye-color2"></i>
              <p>听歌识曲</p>
            </div>
          </div>
        </div>
        <div class="slider-div2">

          <div v-for="(item,index) in sliderList" :key="index" class="item-list">
            <router-link :to="{path: item.path }">
              <i class="iconfont  ye-font-size-50" :class="item.icon" style="vertical-align: middle;padding-right: .2rem;"></i>
              <span class="ye-font-size-32">{{item.name}}</span>
            </router-link>

          </div>
        </div>
        <div class="slider-div3 ">
          <ul class="flex-between-center">
            <li @click="changeColor" v-if="$store.state.settingColor">
              <i class="iconfont iconyueliang ye-font-size-40"></i>
              <span>夜间模式</span>
            </li>
            <li @click="changeColor" v-else>
              <i class="iconfont iconyueliang ye-font-size-40"></i>
              <span>白天模式</span>
            </li>
            <li>
              <i class="iconfont iconshezhi ye-font-size-40 "></i>
              <span>设置</span>
            </li>
            <li>
              <i class="iconfont icontuichu2 ye-font-size-40"></i>
              <span>退出</span>
            </li>
          </ul>
        </div>
      </div>

    </mt-popup>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        sliderList:[
          {icon:'icontianmaohuopiaotongxing',name:'演出'},
          {icon:'icongouwuche',name:'商城'},
          {icon:'iconfujin',name:'附近的人'},
          {icon:'iconlingsheng',name:'口袋铃声'},
          {icon:'iconwodedingdan',name:'我的订单',path:'/order'},
          {icon:'icondingshi',name:'定时停止播放'},
          {icon:'icon552dc065f0478',name:'扫一扫'},
          {icon:'iconnaozhong',name:'音乐闹钟'},
          {icon:'iconzaixiantinggemianliuliang',name:'在线听歌免流量'},
          {icon:'iconyouxi',name:'游戏推荐'},
          {icon:'iconyouhuiquan',name:'优惠券'},
          {icon:'iconhuatong',name:'我要直播'},
        ]


      }
    },
    methods:{
      // 去登录
      toLogin() {
        this.$router.push({
          path:'/login'
        })
      },

      changeColor() {
        if(this.$store.state.settingColor) {
          document.getElementById('app').className = 'them' + '-dark'
          this.$store.commit('modifyTheme', false)
        } else {
          this.$store.commit('modifyTheme', true)
          document.getElementById('app').className = 'them'
        }
      }
    }
  }
</script>
<style lang="less" scoped>
  .mint-popup{
    width: 72%;height: 100%;overflow-y: scroll;-webkit-overflow-scrolling: touch;
  }
  .mint-navbar{
    background: none;
  }
  .slider-header{
    height: 3.4rem;
  }
  .slider-div1{
    padding: 1rem .2rem;
    border-bottom: 1px solid;
    box-sizing: border-box;
  }
  .slider-div1 p{
    margin-top: .1rem;
  }
  .slider-div2{
    padding: .2rem;
  }
  .item-list{
    margin-top: .4rem;
  }
  .slider-div3{
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    position: fixed;
    left: 0;
    bottom: 0;
    padding: 0 .2rem;
    box-sizing: border-box;
  }
  .slider-div3 i{
    vertical-align: middle;
    padding-right: .1rem;
  }

</style>
