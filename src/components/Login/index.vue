<template>
  <div class="login-container">
    <div class="input-div">
      <i class="iconfont login-icon iconshouji1 ye-font-size-40"></i>
      <input type="text" class="phone-input" placeholder="请输入手机号或邮箱" v-model="phone">
    </div>
    <div class="input-div">
      <i class="iconfont login-icon iconsuo2 ye-font-size-40"></i>
      <input type="password" class="password" placeholder="请输入密码" v-model="password">
    </div>
    <div class="btn-wrapper">
      <mt-button  type="danger"  class="btn" @click="register">注册</mt-button>
      <mt-button  type="danger" class="btn login-btn" @click="login">登录</mt-button>
    </div>



  </div>
</template>

<script>
  export default {
    data() {
      return {
        phone: '', // 手机号
        password: '', // 密码

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
      },

      // 注册
      register() {

      },


      // 登录
     async login() {
        try {
          if(!this.phone){
            this.$toast({
              message: '请输入正确的手机号'
            });
            return
          }
          if(!this.password) {
            this.$toast({
              message: '请输入密码'
            });
            return
          }
          let _paramsPhone ={
            phone: this.phone
          }
        this.http.send({ command: '/cellphone/existence/check',params:_paramsPhone })
            .then((res) => {
              if(res.exist == 2) { // 已经注册过
                let _params ={
                  phone: this.phone,
                  password: this.password
                }
                this.http.send({ command: '/login/cellphone',params:_params })
                  .then(function (res) {
                    console.log(res)
                  })
              } else if(res.exist == -1){ // 没有注册过
                this.$toast({
                  message: '请先去注册账号哦'
                })

              }
            })
        } catch (res){
          console.log(res)
        }


      }

    }
  }
</script>
<style lang="less">
  .login-container{
    width: 100%;
    min-height: 100vh;
    background: lemonchiffon;
    padding-top: 4rem;
    text-align: center;
    box-sizing: border-box;
  }
  .btn-wrapper{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 1rem;
  }
  .btn{
    width: 2.4rem;
    margin-bottom: .5rem;
    height: .7rem;
  }

  .login-btn{
    margin-left: .2rem;
  }
  .input-div{
    position: relative;
  }

  .login-icon{
    position: absolute;
    left: 1.35rem;
  }
  .iconshouji1{
    top: .18rem;
  }
  .iconsuo2{
    top: .45rem;
  }
  .input-div input{
    height: .8rem;
    width: 5rem;
    border: 1px solid #999999;
    border-radius: .2rem;
    background: rgba(0,0,0,.3);
    padding-left: .5rem;
    box-sizing: border-box;
  }
  .input-div input:focus {
    outline: medium;
  }
  .password{
    margin-top: .3rem;
  }


</style>
