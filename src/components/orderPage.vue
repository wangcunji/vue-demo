<template>
  <div>
    <div>{{title}}</div>
    <button @click="changeTitle">值改变</button>
    <vue-lazy-component>
        <orderlist v-for="item of orderList" :key="item.consignGuid" :orderItem = item></orderlist>
    </vue-lazy-component>
  </div>
</template>
<script>

import common from "../assets/js/common.js";
import orderlist from "./orderList.vue";
import vueLazyComponent from "vue-lazy-component";

export default {
  name:"orderPage",
  data(){
      return {
        listParams:{
          baseEntId:"59dea301-a9c1-4511-bb0e-d801af7aa2df",
          baseUserId:"b18fd6e8-0b7a-420e-b8cd-913a9b727954",
          listType:2,
          bizOrderType:'',
          isReceipt: '',
          receiptStatus:'',
          consignTimeStart:'',
          consignTimeEnd:'',
          originCity:'',
          destinationCity:'',
          sender:'',
          senderCall:'',
          receivePersonName:'',
          receiveCall:'',
          consignOrderNum:'',
          goodsNumber:'',
          pageSize:10,
          pageIndex:1,
        },
        orderList: [],
        listshow:'',
        title:'初始值'
      }
  },
  components:{
      orderlist:orderlist,
      vueLazyComponent:vueLazyComponent
  },
  methods:{
    getOrderList(){
      console.log(this)
      common.normalAxios().post("biz/order/receipt/getConsignOrderReceiptList.htm",this.listParams)
      .then(res => {
        console.log(res);
        this.orderList = res.data.data;
      })
    },
    changeTitle(){
      this.title = "第一个改变的值"
    },
  },
  watch:{
    title: function(val,oldval){
      console.log(val,oldval);
    }
  },
  created(){
      this.getOrderList();
  }
}
</script>

<style scoped>
.enterClass{
    background-color: #333; 
}
</style>

