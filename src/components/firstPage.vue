<template>
  <div>
    第一个页面
    <div>{{msg}}</div>
    <div @click="toast">Toast测试</div>
    <router-link to="/orderPage">订单列表</router-link>
  </div>
</template>

<script>
  export default {
    name:'firstPage',
    data(){
      return{
        msg:this.$route.query.msg
      }
    },
    methods:{
      toast(){
        this.$toast ("这是第一次显示toast");
      }
    },
    mounted (){
      console.log(this);
      console.log(this.$msg)
    }
  }
</script>

<style>
  #app {
    height: 100%;
  }
</style>