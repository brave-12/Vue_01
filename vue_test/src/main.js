// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'

// 完整引入
// 引入ElementUI 组件库
// import ElementUI from 'element-ui';
// 引入ElementUI全部样式  但是会导致占用过大
// import 'element-ui/lib/theme-chalk/index.css';

// 按需引入   组件是 el-button   只要写 Button 即可
import { Button,Row,DatePicker } from 'element-ui';


// 关闭Vue的生产提示
Vue.config.productionTip = false
// 应用Vue.use(ElementUI);
// Vue.use(ElementUI);
// Button.name  对应的是 App 内标签的名字  也可以自己起名字 'atguigu-button'
Vue.component(Button.name, Button);
Vue.component(Row.name, Row);
Vue.component(DatePicker.name, DatePicker);

//创建vm
new Vue({
	el:'#app',
	render: h => h(App),
})
