<template>
  <div>
    <div @click="changeMsg">{{msg}}</div>
    <!-- <button>点击触发</button> -->
    <div>{{test}}</div>
  </div>
</template>

<script>
import Vue from 'vue';

export default {

  name:'tick',
  data(){
      return {
          msg:'初始值',
          test:this.$store.state.test
      }
  },
  methods: {
      changeMsg(){
          this.msg = 'hello World';
          console.log(this.$el.textContent==='hello World');
          this.$nextTick(function(){
            console.log(this.$el.textContent==='hello World');
          })
      }
  }
}
</script>

