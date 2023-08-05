// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'


// 关闭Vue生产提示
Vue.config.productionTip = false
// scoped样式
// 1. 作用：让样式在局部生效，防止冲突。
// 2. 写法： <style scoped>
// 如果 style 里面有 lang 配置项不能空着  或者不写 lang  lang 用于设置 style 用的是 css 或者是 less 等

new Vue({
    el:'#app',
    render: h => h(App)
})