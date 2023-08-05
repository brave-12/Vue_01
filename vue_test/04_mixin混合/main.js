// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
import {mixin,hunhe} from './mixin'
// 关闭Vue生产提示
Vue.config.productionTip = false
// 全局混合(混入)    Vue.mixin
// Vue.mixin(mixin)
// Vue.mixin(hunhe)
new Vue({
    el:'#app',
    render: h => h(App)
})