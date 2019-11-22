<template>
  <div class="songs-list-wrapper">
    <div class="div1" style="background:lightpink;height: 2rem;" v-if="!fixHeader">
      <p>歌单列表{{id}} 头部</p>
    </div>
    <div style="background: yellow;height: 1rem;" v-if="fixHeader">
      <mt-header fixed title="固定在顶部"></mt-header>
    </div>
    <div v-if="!hideOther">
      <div class="div2" style="background: #42b983;height: 4rem;">
        <p>图片描述部分</p>
      </div>
      <div class="div3" style="background: tomato;height: 2rem">
        <p>消息下载部分</p>
      </div>
      <div class="div4" style="background: salmon;height: 1rem">
        <p>vip部分</p>
      </div>
    </div>
    <div class="div5" style="background: plum;">
      <div style="background: cornflowerblue;height: 1rem;" v-if="!hideOther">
        <p>播放部分</p>
      </div>
      <div style="background: yellow;height: 1rem;" v-if="hideOther">
        <mt-header  title="歌曲固定"></mt-header>
      </div>
      <div >
        <p v-for="item in 20" style="margin: 1rem 0">歌曲列表部分</p>
      </div>
    </div>

  </div>
</template>
<script>
  export default {
    name:'songsList',
    data() {
      return {
        id:'',
        scrollTop:'',
        fixHeader: false,
        hideOther: false

      }
    },

    mounted() {
      this.id = this.$route.query.id
      window.addEventListener('scroll', this.handleScroll, true)

    },
    methods:{
      handleScroll() {
        this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        console.log(this.scrollTop)
      if(this.scrollTop > 150) {
        this.fixHeader = true
        if(this.scrollTop > 300) {
          this.hideOther = true
        }
      }
      if(this.scrollTop < 300) {
        this.hideOther = false
        if(this.scrollTop < 150) {
          this.fixHeader = false
        }
      }
      }
    }
  }
</script>
<style lang="less" scoped>

</style>
