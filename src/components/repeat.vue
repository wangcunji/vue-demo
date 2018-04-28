<template>
    <div>
        <ul>
            <li></li>
        </ul>
    </div>
</template>

<script>
export default {
  name:'repeat',
  data(){
      return {
          list:[
              {
                  id:1,
                  name:'第一行'  
              },
              {
                  id:2,
                  name:'第二行'  
              },
              {
                  id:3,
                  name:'第三行'  
              },
              {
                  id:4,
                  name:'第四行'  
              }
            ]
      }
  },
  methods: {
      changeList(){
          
      }
  }
}
</script>


