<template>
    <!-- 
      ### 路由的props配置
  ​    作用：让路由组件更方便的收到参数 -->
  <ul>
      <!-- 如果用的是 params 参数   这里的 query 也应该要对应改成 params  -->
      <!-- {{$router.params.id}} -->

      <!-- 将所有 params参数通过 props 的形式接受 就可以直接使用   但是不能使用 query 参数 -->
      <li>消息编号:{{id}}</li>
      <li>消息标题:{{title}}</li>


  </ul>
</template>

<script>
export default {
    name:'Detail',
    // 在index 中设置props:true 让参数以props的形式传给该组件  然后接受 id 和 title  就可以直接使用
    props:['id','title']
     
}
</script>

<style>

</style>