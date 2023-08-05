<template>
  <div>
      <!-- Vue封装的过度与动画
      准备好样式：
        - 元素进入的样式：
        1. v-enter：进入的起点
        2. v-enter-active：进入过程中
        3. v-enter-to：进入的终点
        - 元素离开的样式：
        1. v-leave：离开的起点
        2. v-leave-active：离开过程中
        3. v-leave-to：离开的终点 -->

      <button @click="isShow = !isShow" >显示/隐藏</button>
      <!-- 如果给了 transition 一个 name="hello"  那么下面的样式也要写成 .hello-enter-active -->
      <!-- 不同 transition 命令不同    name 的好处是可以根据不同样式进行调整  例如相反方向变化 -->
      <!-- :appear="true" 让页面直接运行样式一次  或者直接写 appear 就行了 -->
      <transition name="hello" >
          <h1 v-show="isShow">你好啊！</h1>
      </transition>
  </div>
</template>

<script>
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

/* vue进入时候的样式 */
.hello-enter-active{
    /* 使用动画 atguigu 时间 1s */
    animation: atguigu 1s;
}
/* vue退出时候的样式 */
.hello-leave-active{
    /* reverse 反转 */
    animation: atguigu 1s reverse;
}

/* atguigu 是定义的动画名字 */
@keyframes atguigu {
    from{
        transform: translate(-100%)
    }
    to{
        transform: translate(0px)
    }
}
</style>