<template>
    <div class="form-node">
        <input v-model="invalue" @change="valueChange">
        <div>{{invalue}}</div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:"formNode",
        props:{
            invalue:{
                type:String
//                default:'五七万'
            }
        },
        data(){
            return {
                msg: '',
//                invalue: '',
            }
        },
        methods:{
            valueChange(value){
                console.log(value)
            }
        }
    }
</script>

<style scoped>
    .form-node{
        margin-top: 20px;
    }
</style>