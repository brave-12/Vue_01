<template>
  <div>
      <button @click="isShow = !isShow" >显示/隐藏</button>
      <!-- transition 只能运行一个动画   transition-group 可以使用多个元素 -->
      <!-- 并且 transition-group 也都需要命名不同的key值 -->
      <transition-group name="hello" >
          <!-- 如果用div包裹下面两个然后 v-show="isShow 给  div也能实现功能  但是有些功能就无法实现 -->
          <!-- 例如其中一个变成 v-show="!isShow" 就能实现两个h1交叉切换的效果 -->
          <h1 v-show="!isShow" key="1">你好啊！</h1>
          <h1 v-show="isShow" key="2">尚硅谷！</h1>
      </transition-group>
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

/* 进入的起点,离开的终点   由于两个一样 可以写在一起命名 */
.hello-enter,.hello-leave-to{
    transform: translate(-100%);
}
/* 进入的终点,离开的起点   由于两个一样 可以写在一起命名 */
.hello-enter-to,.hello-leave{
    transform: translate(0);
}

/* 设置动画进来和出去的过渡样式相同 */
.hello-enter-active,.hello-leave-active{
    transition: 0.5s linear;
}




</style>