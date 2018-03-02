<template>
    <div>
        <div @click="changeInit()">第二个页面</div>
        <div>{{msg}}</div>
        <div v-html="rawHtml"></div>
        {{newvalue}}  VS  {{revalue}}
        <vueDialog v-if="isShow" :dialogObj="dialogObj" v-on:confrim="onthisData($event)"></vueDialog>
        <div>
            <button @click="deleteThis()">删除啊啊</button>
            <button @click="showData()">数据获取测试</button>
        </div>
        <from-node :invalue.sync="initval"></from-node>
    </div>
</template>

<script>
  import vueDialog from './vueDialog.vue'
  import dialog from "../assets/js/vueDialog"
  import fromNode from "./formNode.vue"
  
  export default {
    name:'secondPage',
    data(){
      return{
          msg:this.$store.state.test,
          rawHtml:`<span>这是一个span元素</span>`,
          newvalue:'hello vue',
          initval:"默认值呢",
          isShow:true,
          dialogObj:{
              title:'第一个组件',
              content:"是否开始工作",
              confrimText:'同意',
              cancleText:"拒绝",
//              cancleFun:this.cancleClick,
//              confrimFun:this.confrimClick
          }
      }
    },
    computed:{
        revalue:function () {
            return this.newvalue.split('').reverse().join('')
        }
    },
    components:{
        vueDialog:vueDialog,
        fromNode:fromNode
    },
    methods:{
        changeInit(){
            console.log('dasda')
            dialog.showDialog()
            this.$store.commit('changeTest','第二个页面改变的值');
        },
        cancleClick(){
            this.isShow = false
        },
        confrimClick(){
            console.log("confrimClick--")
            this.isShow = false
        },
        deleteThis(){
            this.dialogObj.content="是否删除此条消息？"
            this.isShow = true
        },
        onthisData($event){
            console.log($event)
            console.log('----------------')
        },
        showData(){
            console.log(this)
            console.log(this.$options.data)
        }
    }
  }
</script>

<style>
  #app {
    height: 100%;
  }
</style>