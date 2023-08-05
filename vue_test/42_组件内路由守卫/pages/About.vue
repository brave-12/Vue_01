<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
    name:'About',
    // 组件内路由守卫
    // 通过路由规则，进入该组件时被调用   如果是通过app.vue内输入这个组件展示  则不会调用
    beforeRouteEnter (to, from, next) {
      console.log('beforeRouteEnter');
      next()
      // 如果需要进行以下判断条件  只需要在index的About的meta文件里加 isAuth:true 即可
      // if(to.meta.isAuth){  //判断是否需要鉴权
      //     if(localStorage.getItem('school')==='atguigu'){
      //         next()
      //     }else{
      //         alert('学校名错误，无权查看，在应用程序的本地存储里面修改key')
      //     }
      // }else{
      //     next()
      // }
    },
    // 通过路由规则，离开该组件时被调用
    beforeRouteLeave (to, from, next) {
      console.log('beforeRouteLeave');
      next()
    }
}
</script>

<style>

</style>