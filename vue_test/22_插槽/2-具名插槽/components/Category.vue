<template>
  <div class="Category">
      <h3>{{title}}分类</h3>
      <!-- 定义一个插槽（挖个坑，等着组件的使用者进行填充） 如果写两个slow不命名 那么就会重复渲染两次数据 -->
	  <slot name="center">我是一些默认值，当使用者没有传递具体结构时，我会出现</slot>
      <slot name="footer">我是一些默认值，当使用者没有传递具体结构时，我会出现</slot>
  </div>
</template>

<script>
export default {
    name:"Category",
    props:['title']
}
</script>

<style scoped>
.Category{
    background-color: skyblue;
    width: 200px;
    height: 300px;
}
</style>