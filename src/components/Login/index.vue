<template>
  <div class="login-container">
    <p>login页面</p>
    <i class="iconfont iconsousuo" ></i>

  </div>
</template>
<script>
  export default {
    data() {
      return {

      }
    },
    mounted(){
      // this.test()
    },
    methods: {
      test() {
        var _params ={
          phone:'13249831822',
        }
        this.http.send({ command: '/captcha/sent',params:_params })
          .then(function (res) {
            console.log(res)

          })
      }

    }
  }
</script>
<style lang="less">

</style>
