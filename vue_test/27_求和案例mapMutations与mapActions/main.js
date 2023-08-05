// 如果import导入写在最后面   同样也会比其他文件先执行
// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 引入插件vue-resource
import vueResource from 'vue-resource'
// 引入store    也可以不写 index   因为会默认去寻找index文件
import store from './store/index'


// 关闭Vue生产提示
Vue.config.productionTip = false
// 使用插件  
// 全局可以直接使用  this.$http     与axios效果相同
Vue.use(vueResource)


// 创建 vm
new Vue({
    el:'#app',
    render: h => h(App),
    store,
    beforeCreate() {
        // 安装全局事件总线
        Vue.prototype.$bus = this
    },
})
