<template>
  <div class="todo-header">
    <!-- v-model 双向绑定 -->
    <input type="text" placeholder="请输入你的任务名称，按回车键确认"  @keyup.enter="add" />
  </div>
</template>

<script>
// 通过 nanoid 模块 创建一个唯一的字符串来设置id
import {nanoid} from 'nanoid'

export default {
  name: "MyHeader",
  props:['addTodo'],
  methods: {
    add(e){
      // 控件少用这个   控件多可以使用 data 定义  然后双向绑定控件
      // console.log(e.target.value);

      // 将用户的输入包装成一个todo对象   一般现实开发渲染列表是通过数据库
      // todoObj 不能直接传给 MyList   因为是兄弟关系  如果是传给App就没这个影响

      // 判断输入框是否为空   trim() 前后不能为空
      if(!e.target.value.trim()) return alert('输入不能为空')
      const todoObj = {id:nanoid(),title:e.target.value,done:false}
      // 通知App组件去添加一个todo对象  调用 App 内的 addTodo 方法
      this.addTodo(todoObj)
      // 回车数据传输之后输入框设置为空
      e.target.value = ''
    }
  },
};
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>