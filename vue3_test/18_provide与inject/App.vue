<template>
  <div class="app">
    <h3>我是App组件(祖),{{name}}---{{price}}</h3>
    <Child/>
  </div>
</template>

<script>
import {reactive,toRefs,provide} from 'vue'
import Child from './components/Child'
export default {
  name:'App',
  components:{Child},
  setup() {

    let car = reactive({
      name:'奔驰',
      price:'40W'
    })

    // 父组件有一个 provide 选项来提供数据   后代组件有一个 inject 选项来开始使用这些数据
    // 主要是 祖与孙及更后代组件间通信
    provide('car',car)  // 给自己的后代组件传递数据

    return {...toRefs(car)}
  }
}
</script>

<style>
.app{
  background-color: gray;
  padding: 10px;
}
</style>