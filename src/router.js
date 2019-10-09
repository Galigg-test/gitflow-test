import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import My from  './views/My.vue'
import Login from './views/Login.vue'
import Reg from  './views/Reg.vue'
import Test from  './views/Test.vue'
Vue.use(Router)

const router= new Router({
  routes: [

    {
      path: '/home',
      name: 'home',  //命名路由
      component: Home,
      beforeEnter(to,from,next){
          console.log('路由独享')
          console.log("to",to)
          console.log('from',from)
          next()
      }
    },
    {
      path: '/my',
      name: 'my',
      component: My,
      children:[
        {
          path:'login',
          component:Login
        },
        {
          path:'reg',
          component:Reg
        }
      ]
    },
    {
      path:'/test/:id',
      component:Test
    },
    {
      path:'/',
      redirect:'/home'
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
// 全局前置守卫  所有的路由跳转之前经过函数处理，根据需要控制是否跳转
// a->b
// router.beforeEach((to,from,next)=>{
//   console.log("to",to)
//   console.log('from',from)
//   if(to.path==='/home'){
//      let token=JSON.parse(localStorage.getItem('info'))?JSON.parse(localStorage.getItem('info')).token:null
//      if(token){
//        next()
//      }else{
//        next('/my/login')
//      }
//   }else{
//     next()
//   }
// })
// 全局后置守卫 路由跳转完成后触发
// router.afterEach((to,from)=>{
//   console.log('全局后置守卫')
//   console.log("to",to)
//   console.log('from',from)
// })

export default router
