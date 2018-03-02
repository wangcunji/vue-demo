<template>
  <div>
    <div>{{orderItem.originCity}}--{{orderItem.destinationCity}}</div>
  </div>
</template>

<script>

export default {
  name:"orderlist",
  props:{
    orderItem:{}
  },
  data(){
      return {
      }
  },
  methods:{
  },
  created(){
  }
}
</script>
