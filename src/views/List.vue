<template>
  <div class="list">
     <ul v-for ='(item,index) in listAll' :key='index'>
       <li>{{item.matter}}
         <span v-if='item.state'>已完成</span>
         <button v-else @click="finish(item._id)">完成</button>
         <button @click='del(item._id)'>删除</button>
       </li>
     </ul>
  </div>
</template>

<script>

import {mapGetters,mapActions} from 'vuex'
export default {
  name: 'home',
  computed: {
    ...mapGetters(['listAll'])
  },
  methods: {
    ...mapActions(['updateList']),
    del(_id){
      // let {token} = JSON.parse(localStorage.getItem('info'))
      this.$axios.post('/fcj/v1/matter/del',{_id:_id})
      .then((data)=>{
        console.log(data)
        if(data.err === 0){
          this.updateList()
        }
      })
    },
    finish(_id){
      // let {token} = JSON.parse(localStorage.getItem('info'))
      this.$axios.post('/fcj/v1/matter/update',{_id:_id})
      .then((data)=>{
        console.log(data)
        if(data.err === 0){
          this.updateList()
        }
      }) 
    }
  },
}
</script>
