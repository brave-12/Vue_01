<template>
  <div>
      <button @click="isShow = !isShow" >显示/隐藏</button>

      <!-- animate.css 官方网站  https://animate.style/ -->
      <!-- animate__swing 能实现抖动的效果   animate__backInUp 能实现向上飘的效果 -->
      <transition-group 
      name="animate__animated animate__bounce"
      appear
      enter-active-class="animate__swing"
      leave-active-class="animate__backInUp"
        >
          <h1 v-show="!isShow" key="1">你好啊！</h1>
          <h1 v-show="isShow" key="2">尚硅谷！</h1>
      </transition-group>
  </div>
</template>

<script>
import 'animate.css'
export default {
    name:"Test",
    data(){
        return{
            isShow:true
        }
    }
}
</script>

<style scoped>
h1{
    background-color: orange;
}



</style>