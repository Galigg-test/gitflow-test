<template>
  <div class="home">
    <Input></Input>
    <List></List>
    <MatterNav></MatterNav>

  </div>
</template>

<script>

import List from './List'
import Input from './Input'
import MatterNav from  './MatterNav'
import {mapMutations,mapActions} from 'vuex'
export default {
  name: 'home',
  components:{List,Input,MatterNav},
  methods: {
    ...mapActions(['updateList']),
    // ...mapMutations(['updateList']),
    initList(){
      console.log(222)
      this.updateList()
    }
  },
  created() {
   this.initList()  
  },
}
</script>
