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
    },
    {
      path:'/orderPage',
      name:'orderPage',
      component: (resovle)=>{
        require(["@/components/orderPage"],resovle)
      }
    }
  ]
})
