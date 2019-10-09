<template>
  <div class="login-container">
    <p>login页面</p>

  </div>
</template>
<script>
  export default {
    data() {
      return {

      }
    },
    mounted(){
      this.test()
    },
    methods: {
      test() {
        var _params ={
          phone:'13249831822',
          password:'12345ww'
        }
        this.http.send({ command: '/login/cellphone',params:_params })
          .then(function (res) {
            console.log(res)

          })
      }

    }
  }
</script>
<style lang="less">

</style>
