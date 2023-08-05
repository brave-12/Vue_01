<template>
  <div>
    <!-- ref 类似相当于网页中 id 的作用  但是返回的是对应组件元素  -->
    <!-- 而如果是id加在其中里面一个组件上  会将外面包括的整个div返回 -->
      <h1 v-text="msg" ref="title"></h1>
      <button @click="showDOM">点我输出上方的DOM元素</button>
      <!-- <School></School> -->
      <!-- 简写形式 -->
      <School  ref="sch"/>
  </div>
</template>

<script>
// 引入 School 组件
import School from './components/School'
export default {
    name:'App',
    data() {
      return {
        msg:'欢迎学习Vue'
      }
    },
    components:{School},
    methods: {
      showDOM(){
        console.log(this.$refs.title);
        console.log(this.$refs.sch);
        
      }
    },
}
</script>

<style>

</style>