module.exports = {
  devServer: {
    proxy: {
       '/fcj':{
         target:'http://47.95.207.1:8080',
         changeOrigin:true,
        pathRewrite:{
          "^/fcj":''
        }
       }
    }
  }
}
/*
http://10.60.14.25:8080/fcj/xxxx
http://47.95.207.1:8080/fcj/xxxx
*/ 