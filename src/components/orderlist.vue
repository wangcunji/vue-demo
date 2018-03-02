<template>
  <div>
    <div>{{item.originCity}}--{{item.destinationCity}}</div>
  </div>
</template>

<script>

export default {
  name:"orderlist",
  props:{
    orderItem:{
      type:Object,
      required:true,
      default:{}
    }
  },
  data(){
      return {
        item:this.orderItem
      }
  },
  methods:{
  },
  created(){
  }
}
</script>
