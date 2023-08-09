<template>
  <div class="app">
    <h3>我是App组件</h3>
    <!-- 相当于异步引入  不需要额外去引入 defineAsyncComponent -->
    <!-- 等待异步组件时渲染一些额外内容，让应用有更好的用户体验 -->
    <Suspense>
      <!-- default 默认展示的插槽 -->
      <template v-slot:default>
        <Child/>
      </template>
      <!-- fallback 则是默认插槽还没加载完毕的时候显示的内容 -->
      <template v-slot:fallback>
        <h3>稍等加载中...</h3>
      </template>

    </Suspense>
  </div>
</template>

<script>
//  x 全局 API（Vue）              x 实例 API (app)
// | Vue.config.xxxx          | app.config.xxxx                             |
// | ------------------------ | ------------------------------------------- |
// | Vue.config.productionTip | 移除
// | Vue.component            | app.component                               |
// | Vue.directive            | app.directive                               |
// | Vue.mixin                | app.mixin                                   |
// | Vue.use                  | app.use                                     |
// | Vue.prototype            | app.config.globalProperties                 |

// 静态引入  需要等Child加载完整个div才渲染  而异步则不需要
// import Child from './components/Child'

// 异步引入(动态引入)  defineAsyncComponent   定义一个异步组件   也就是本身的App组件先出来  Child组件后出来
import {defineAsyncComponent} from 'vue' 
const Child = defineAsyncComponent(()=>import('./components/Child')) //异步引入

// 或者也可以通过 async setup  +  promise  的方法

export default {
  name:'App',
  components:{Child},
  
}
</script>

<style>
.app{
  background-color: gray;
  padding: 10px;
}
</style>