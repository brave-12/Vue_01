<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
    name:'About',
    // 组件内路由守卫
    // 通过路由规则，进入该组件时被调用
    beforeRouteEnter (to, from, next) {
      // ...
    },
    // 通过路由规则，离开该组件时被调用
    beforeRouteLeave (to, from, next) {
      // ...
    }
}
</script>

<style>

</style>