var Toast = {};

Toast.install = function(Vue,options){
    let opt = {
        defaultType:'bottom',   // 默认显示位置
        duration:'2500'         // 持续时间
    }
    for(let property in options){
        opt[property] = options[property];  // 使用 options 的配置
    }
    Vue.prototype.$msg = "Hellow World";
    
    Vue.prototype.$toast = function(tips,type){
        if(type){
            opt.defaultType = type;         // 如果有传type，位置则设为该type
        };
        if(document.getElementsByClassName('vue-toast').length){
            // 如果toast还在，则不再执行
            return;
        }
        let toastTpl = Vue.extend({// 1、创建构造器，定义好提示信息的模板
            template:`<div class='vue_toast toast-${opt.defaultType}'>${tips}</div>`
        });
        let tpl = new toastTpl().$mount().$el;// 2、创建实例，挂载到文档以后的地方
        document.body.appendChild(tpl);// 3、把创建的实例添加到body中
        setTimeout(function () {        // 4、延迟2.5秒后移除该提示
            document.body.removeChild(tpl);
        }, opt.duration)
    };

    ["bottom","center","top"].forEach(type => {
        Vue.prototype.$toast[type] = (tips) => {
            return Vue.prototype.$toast(tips,type)
        }
    })
}

module.exports = Toast;


