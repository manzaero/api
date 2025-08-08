const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/port-api/',
  devServer: {
    hot: false
  }
})
