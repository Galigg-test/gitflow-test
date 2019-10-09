<template>
  <div class="nav">
  
   <ul>
     <li  @click='jump(0)'>全部</li>
     <li @click='jump(1)'>已完成</li>
     <li @click='jump(-1)'>为完成</li>
   </ul>
  </div>
</template>

<script>


import {mapMutations} from 'vuex'
export default {
  methods: {
    ...mapMutations(['changeType']),
    // ...mapMutations(['updateList']),
    jump(type){
      this.changeType(type)
    }
  }
}
</script>
