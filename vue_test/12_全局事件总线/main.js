//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//关闭Vue的生产提示
Vue.config.productionTip = false

// 使用 vc 创建
// const demo = Vue.extend({})
// const d = new demo()
// Vue.prototype.x = d

//创建vm
new Vue({
	el:'#app',
	render: h => h(App),
	// beforeCreate 的this指向是vm
	// 安装全局事件总线($bus)    $bus 就是当前应用的vm
	beforeCreate() {
		Vue.prototype.$bus = this
	},
})