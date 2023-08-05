<template>
  <li>
    <label>
      <!-- checked 加个绑定   然后根据 todo.done 的布尔值判断true和false 并且勾选框 -->
      <!-- 设置勾选框可以通过 @click 或者 @change 绑定事件的状态 -->
      <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)" />
      <!-- 但是不推荐：如果是checkbox则可以直接  v-model 双向绑定然后就能实现功能  不需要逐级传递改变数据 -->
      <!-- 双向数据绑定不能是 props 传入的数据  因为 props 内的数据改变会报错 即使暂时不会报错也困难能影响后续 -->
      <!-- <input type="checkbox" v-model="todo.done" /> -->
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)" >删除</button>
  </li>
</template>

<script>
export default {
  name: "MyItem",
  // 声明接收 todo 对象
  props:['todo','checkTodo','delteTodo'],
  methods: {
    handleCheck(id){
      // 通知 App 组件将对应todo对象的done值取反  也就是勾选状态取反
      this.checkTodo(id)
    },
    // 删除
    handleDelete(id){
      // confirm () 方法用于显示一个带有指定消息和 OK 及取消按钮的对话框
      if(confirm('确定删除吗？')){
        this.delteTodo(id)
      }
      
    }
  },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

/* 鼠标经过变成灰色 */
li:hover{
  background-color: #ddd;
}

/* 鼠标经过的时候让button按钮重新出现 */
li:hover button{
  display: block;
}
</style>