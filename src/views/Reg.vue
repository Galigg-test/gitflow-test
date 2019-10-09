<template>
  <div class="reg">
    <h1>注册</h1>
    us:<input type="text"  v-model="us">
    <hr>
    ps:<input type='text' v-model="ps">
    {{us}}{{ps}}
    <hr>
    <button @click="reg">reg</button>
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
    reg(){
      let url='/fcj/v1/user/reg'
      this.$axios.post(url,{us:this.us,ps:this.ps})
      .then((data)=>{
        console.log(data)
        if(data.err==0){
          this.$router.push('/my/login')
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