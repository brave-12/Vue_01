<template>
  <ul>
      <!-- 数据传过来保存在 $router.query 的数组里面 -->
      <li>消息编号:{{$route.query.id}}</li>
      <li>消息标题:{{$route.query.title}}</li>
  </ul>
</template>

<script>
export default {
    name:'Detail',
}
</script>

<style>

</style>