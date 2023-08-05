<template>
  <ul class="todo-main">
    <!-- 循环 todos 数组  按照 todoObj.id 来循环   创建 todo 对象并且绑定传输 todoObj 循环之后的数据 -->
    <!--     
      如果使用的是全局事件总线就不需要通过 Mylist 作为中间人 传输这些事件给 Myitem
    :checkTodo="checkTodo"
    :delteTodo="delteTodo" -->
    <MyItem 
    v-for="todoObj in todos" 
    :key="todoObj.id" 
    :todo="todoObj"
    />
  </ul>
</template>

<script>
import MyItem from "./MyItem";
export default {
  name: "MyList",
  components: { MyItem },
  // props 主要用于组件的传值，他的工作就是为了接收外面传过来的数据
  props:['todos']
};

</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>