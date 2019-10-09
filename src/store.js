import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
     list:[],
     modelState:false,//token丢失的拦截模态框
     type:0 //1 -1
  },
  getters:{
    modelState(state){
      return state.modelState
    },
    listAll(state){
        let list=state.list
        let data=[]
        switch (state.type) {
          case 0:
            // 0表示全部
            data=list
            break;
          case 1:
            // 表示已完成
            data=list.filter((item)=>{
              return item.state
            })
            break;
          case -1:
            // 表示未完成
              data=list.filter((item)=>{
                return !item.state
              })
            break;
          default:
            break;
        }
        return data
    }
  },
  mutations: {
    changeModel(state,params){
      state.modelState=params
    },
    changeType(state,type){
      state.type=type
    },
    updateList(state,params){
        state.list=params
    },
    addMatter(state,params){
      state.list.push(params)
    }
  },
  actions: {
     updateList({commit}){
      console.log('请求数据更新list')
      let {_id}=JSON.parse(localStorage.getItem('info'))||{_id:null}
      axios.post('/fcj/v1/matter/get',{uid:_id})
      .then((data)=>{
        console.log(data)
        if(data.err===0){
          //  直接控制修改
          commit('updateList',data.list)
          // this.updateList(data.list)
        }else{
          // alert(data.msg)
        }
        
      })
     }
  }
})
