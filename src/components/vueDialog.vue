<template>
    <div id="vueDialog" v-if="isShow">
        <div class="dialogBg"></div>
        <div class="vue-dialog">
            <div class="dialog-container">
                <div class="dialogTitle">{{dialogObj.title}}</div>
                <div class="dialogContent">{{dialogObj.content}}</div>
                <div class="dialogBtn">
                    <div @click="cancleFun" class="dialogBtn-cancle">{{dialogObj.cancleText||'取消'}}</div>
                    <div @click="confrimFun" class="dialogBtn-confrim">{{dialogObj.confrimText||'确认'}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"vueDialog",
        props:{
            dialogObj:{
                type:Object,
                require:true,
                default:{
                    title:{
                        type:String,
                        require:true,
                    },
                    content:{
                        type:String
                    },
                    cancleText:{
                        type:String
                    },
                    confrimText:{
                        type:String
                    },
                    cancleFun:{
                        type:Function,
                        default:this.cancleClick
                    },
                    confrimFun:{
                        type:Function,
                        default:this.cancleClick
                    }
                }
            },
//            confrim:{
//                type:Function,
//                default:function () {
//                    this.$emit('confrim',"this is confrimClick!")
//                }
//            }
        },
        data(){
            return{
                info:'',
                isShow:false,
                cancleFun:this.dialogObj.cancleFun?this.dialogObj.cancleFun:this.cancleClick,
                confrimFun:this.dialogObj.confrimFun?this.dialogObj.confrimFun:this.confrimClick,
            }
        },
        methods:{
            cancleClick(){
                this.isShow = false
            },
            confrimClick(){
                console.log("confrimClick")
                this.isShow = false;
                this.$emit('confrim',"this click confrim")
            }
        },
        created(){
            console.log("vueDialog is created")
            console.log(this.dialogObj)
        },
        mounted(){
            let El = document.getElementById('vueDialog')
            if(El){
                El.setAttribute(
                    "style",`width:${document.documentElement.clientWidth}px;height:${document.documentElement.clientHeight}px`
                )
            }
        }
    }
</script>

<style>
    #vueDialog{
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
    }
    .dialogBg{
        width: 100%;
        height: 100%;
        background-color: #666;
        opacity: 0.3;
    }
    .vue-dialog{
        width: 81%;
        /*min-height: 22%;*/
        position: fixed;
        top: 38%;
        left: 9.5%;
        background-color: #fff;
    }
    .dialog-container{
    }
    .dialogTitle{
        margin-top: 7%;
        font-size: 1.2rem;
        color: #111;
        text-align: center;
        width: 100%;
        line-height: 30px;
    }
    .dialogContent{
        width: 81%;
        color: #bebebe;
        font-size: 1rem;
        margin: 2% auto;
    }
    .dialogBtn{
        display: -moz-flex;
        display: -webkit-flex;
        display: flex;
        width: 100%;
        border-top: 1px solid #bebebe;
        /*line-height: 32%;*/
        height: 48px;
        margin-top: 1%;
        font-size: 1.2rem;
    }
    .dialogBtn-confrim{
        flex: 0 0 50%;
        justify-content: center;
        align-items: center;
        display: inline-flex;
        color: #ff9803;
    }
    .dialogBtn-cancle{
        flex: 0 0 50%;
        justify-content: center;
        align-items: center;
        display: inline-flex;
        border-right: 1px solid #bebebe;
    }
</style>