// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'

// import {mixin,hunhe} from './mixin'
// 全局混合(混入)    Vue.mixin
// Vue.mixin(mixin)
// Vue.mixin(hunhe)

// 引入 plugins 插件
import plugins from './plugins'
// 关闭Vue生产提示
Vue.config.productionTip = false
// 应用（使用）插件
Vue.use(plugins)
new Vue({
    el:'#app',
    render: h => h(App)
})