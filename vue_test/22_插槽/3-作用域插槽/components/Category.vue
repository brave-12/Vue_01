<template>
  <div class="Category">
      <h3>{{title}}分类</h3>
      <!-- 由于数据不在 App 内  因此利用插槽 然后命名一个名字将games数组传过去 -->
      <slot :games="games">我是默认的一些内容</slot>
      
  </div>
</template>

<script>
export default {
    name:"Category",
    props:['title'],
    data() {
        return {
            games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
        }
    },
}
</script>

<style scoped>
.Category{
    background-color: skyblue;
    width: 200px;
    height: 300px;
}
</style>