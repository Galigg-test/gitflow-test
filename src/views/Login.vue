<template>
  <div class="login">
    <h1>登录</h1>
    us:<input type="text"  v-model="us">
    <hr>
    ps:<input type='text' v-model="ps">
    {{us}}{{ps}}
    <hr>
    <button @click="login">login</button>
  </div>
</template>
<script>
import qs from 'qs'
export default {
  data(){
    return{
      us:'',
      ps:''
    }
  },
  methods: {
    login(){
      let url='/fcj/v1/user/login'
      this.$axios.post(url,{us:this.us,ps:this.ps})
      .then((data)=>{
        console.log(data)
        if(data.err==0){
          // data.info  保存登录信息 token  _id 
          localStorage.setItem('info',JSON.stringify(data.info))
          this.$router.push('/home')
        }else{
          alert(data.msg)
        }
      })
      // console.log(this.us,this.ps)
    }
  },
  /*
  1.通过用户名密码注册
  2.前端的规则验证 3-9 字符 包含特殊字符  密码 2-9
  3.判断用户名 是否合法 
  4.判断是否存在
  5.两次密码是否一致
  6.邮箱手机号 验证码
  */ 
}
</script>
<style lang="less">
  
</style>