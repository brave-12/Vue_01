<template>
  <div>
      <h2 @click="showName">学生姓名：{{name}}</h2>
      <h2>学生性别：{{sex}}</h2>
  </div>
</template>

<script>
// 引入一个混合文件
import {mixin,hunhe} from '../mixin'
export default {
    name:'Student',
    data(){
        return {
            name:'张三',
            sex:'男'
        }
    },
    // 调用名字为 mixin 的混合
    mixins:[mixin,hunhe]


}
</script>

<style>

</style>