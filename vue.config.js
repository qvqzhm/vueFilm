const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/changeCinema': {
        target: 'https://i.maoyan.com',
        ws:true,
        changeOrigin: true,
        pathRewrite: { '^/changeCinema':''},
      },
      '/comming':{
        target: 'https://m.maoyan.com',
        ws:true,
        changeOrigin: true,
        pathRewrite: { '^/comming':''},
      },
      '/city':{
        target:'http://localhost:3000',
        ws:true,
        changeOrigin: true,
        pathRewrite: { '^/city':''},
      },
      '/hot':{
        target:'http://localhost:3000',
        ws:true,
        changeOrigin: true,
        pathRewrite: { '^/hot':''},
      },
      '/detail':{
        target:'https://m.maoyan.com',
        ws:true,
        changeOrigin: true,
        pathRewrite: { '^/detail':''},
      },
      '/more':{
        target:'https://m.maoyan.com',
        ws:true,
        changeOrigin: true,
        pathRewrite: { '^/more':''},
      },
      '/cinema':{
        target:'https://i.maoyan.com',
        ws:true,
        changeOrigin: true,
        pathRewrite: { '^/cinema':''},
      },
      '/video':{
        target:'https://i.maoyan.com',
        ws:true,
        changeOrigin: true,
        pathRewrite: { '^/video':''},
      },
      '/mv':{
        target:'https://i.maoyan.com',
        ws:true,
        changeOrigin: true,
        pathRewrite: { '^/mv':''},
      }
    },
  },
})
