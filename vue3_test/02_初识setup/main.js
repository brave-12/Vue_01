// 引入的不再是Vue构造函数，引入的是一个名为createApp的工厂函数  在vue3中不能引入vue2的vue
import { createApp } from 'vue'
import App from './App.vue'

// 创建应用实例对象--app(类似于Vue2中的vm，但app比vm更轻量化)
// (App) 外壳组件App   #app 页面上的容器 id
const app = createApp(App)

console.log('@@',app);
// 挂载
app.mount('#app')

// 创建工程默认写法
// createApp(App).mount('#app')
