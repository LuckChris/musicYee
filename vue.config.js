
module.exports = {
  devServer: {
    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    open: true,
    proxy: {// 输入/api 让其去访问http://localhost:3000/api
      '/api': {
        target: 'http://140.143.128.100:3000', // 设置调用的接口域名和端口号 ( 设置代理目标)
        changeOrigin: true,
        pathRewrite: {
          '^/api': '' // 这是一个通配符，设置完了之后每个接口都要在前面加上/api（特别注意这一点）
        }
      }
    },
  },
}
