const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  base: '/port-api',
  devServer: {
    hot: false
  }
})
