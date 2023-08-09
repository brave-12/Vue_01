const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭eslint校验   因为校验太严格会导致日常编码障碍
  lintOnSave: false,
})
