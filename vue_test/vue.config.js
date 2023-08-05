const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  pages: {
    index: {
      // mian文件的入口  可以更改访问入口的是哪个文件
      // 而且不能省略    省略之后不会按默认地址而是 按配置项缺少东西返回错误
      entry: 'src/main.js',
    }
  },
  transpileDependencies: true,
  // 关闭eslint校验   因为校验太严格会导致日常编码障碍
  lintOnSave: false,

  // 解决跨域问题  5000 指的是要传到的服务器端口   但是不能配置多个代理
  // 开启代理服务器(方式一)  
  // 1. 优点：配置简单，请求资源时直接发给前端（8080）即可。
  // 2. 缺点：不能配置多个代理，不能灵活的控制请求是否走代理。
  // 3. 工作方式：若按照上述配置代理，当请求了前端不存在的资源时，那么该请求会转发给服务器 （优先匹配前端资源）
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // },

  // 开启代理服务器(方式二)    两个方法不能同时用
  // 1. 优点：可以配置多个代理，且可以灵活的控制请求是否走代理。
  // 2. 缺点：配置略微繁琐，请求资源时必须加前缀。
  // 访问 /atguigu 前缀之后    转发到 http://localhost:5000
  devServer: {
    proxy: {
      '/atguigu': {
        target: 'http://localhost:5000',
        // pathRewrite:{'^/atguigu':''}   才能保证传给代理服务器的地址不带 /atguigu
        pathRewrite:{'^/atguigu':''},
        // 用于支持 websocket
        ws: true,
        // 用于控制请求头中的host值
        // 设置为 true   就是让代理服务器 欺骗要访问数据的服务器自己的地址和访问服务器的地址相同
        // 要是设置为false  就会如实告诉访问服务器自己的地址来自于哪里
        changeOrigin: true
      },
      '/demo': {
        target: 'http://localhost:5001',
        // pathRewrite:{'^/atguigu':''}   才能保证传给代理服务器的地址不带 /atguigu
        pathRewrite:{'^/demo':''},

      }

    }
  }

})
