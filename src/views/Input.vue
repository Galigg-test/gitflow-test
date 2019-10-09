<template>
  <div class="home">
    <input type="text" v-model='addValue' >
    <button @click="add">add</button>
  </div>
</template>

<script>

import  {mapActions}from  'vuex'
export default {
  data(){
    return{
      addValue:''
    }
  },
  methods: {
    ...mapActions(['updateList']),
    add(){
      let {_id} = JSON.parse(localStorage.getItem('info'))||{_id:null}
      this.$axios.post('/fcj/v1/matter/add',{uid:_id,matter:this.addValue})
      .then((data)=>{
          console.log(data)
          if(data.err===0){

           this.updateList()
          }

      })
    }
  },
}
</script>
