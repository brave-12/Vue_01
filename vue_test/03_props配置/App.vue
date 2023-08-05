<template>
  <div>
    <!-- v-bind:  冒号后面为变量，会动态变化的值；一般属性后面为常量 -->
    <!-- 通过props配置项复用   设置了age默认值 :age="18" 不用写 -->
      <Student name="李四" sex="女" :age="18"/>
  </div>
</template>

<script>
import Student from './components/Student'
export default {
    name:'App',
    components:{Student},
}
</script>

<style>

</style>