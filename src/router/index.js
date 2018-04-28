import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld,
      meta:{
        required:false
      },
      children:[
        {
          path:'/firstPage',
          name:'firstPage',
          component:(resovle)=>{
            require(['@/components/firstPage'],resovle)
          }
        },
      ]
    },
    {
      path:'/secondPage',
      name:'secondPage',
      component:(resovle)=>{
        require(['@/components/secondPage'],resovle)
      },
      meta:{
        required:true
      },
      beforeEnter(to,from,next){
        console.log(to)
        console.log(from)
        console.log(next)
        next();
      }
    },
    {
      path:'/orderPage',
      name:'orderPage',
      component: (resovle)=>{
        require(["@/components/orderPage"],resovle)
      }
    },
    {
      path:'/tick',
      name:'tick',
      component: (resovle)=>{
        require(["@/components/tick"],resovle)
      }
    }
  ]
})
