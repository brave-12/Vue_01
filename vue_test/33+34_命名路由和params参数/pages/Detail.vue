<template>
  <ul>
      <!-- 如果用的是 params 参数   这里的 query 也应该要对应改成 params  -->
      <li>消息编号:{{$route.params.id}}</li>
      <li>消息标题:{{$route.params.title}}</li>
  </ul>
</template>

<script>
export default {
    name:'Detail',
}
</script>

<style>

</style>