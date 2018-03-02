<template>
  <div>
    第一个页面
    <div>{{msg}}</div>
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
    }
  }
</script>

<style>
  #app {
    height: 100%;
  }
</style>