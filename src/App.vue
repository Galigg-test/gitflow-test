<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/my">About</router-link>
    </div>
    <router-view/>
    <div class='model' v-if='modelState'>
        <div class='card'>
            token失效请重新登录
            <button @click='goLogin'>登录</button>
        </div>
    </div>
  </div>
</template>
<script>
import {mapGetters}from  'vuex'
export default {
    computed: {
      ...mapGetters(['modelState'])
    },
    methods: {
      goLogin(){
        this.$store.commit('changeModel',false)
        this.$router.push('/my/login')
      }
    },
}
</script>
<style lang="less">
.model{
  position: fixed;
  top: 0px;
  bottom: 0px;
  width: 100%;
  background: rgba(0,0,0,0.6);
  .card{
    width: 50%;
    height: 200px;
    background: #fff;
    border-radius:10px; 
    border: 1px solid #ccc;
  }
}
</style>
