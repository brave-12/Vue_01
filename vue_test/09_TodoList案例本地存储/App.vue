<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader :addTodo="addTodo" />
        <!-- 将 todos 交给 MyList -->
        <!-- checkTodo 和 delteTodo 绑定只能先给子元素 MyList  然后给 MyItem -->
        <MyList :todos="todos" :checkTodo="checkTodo" :delteTodo="delteTodo" />
        <MyFooter :todos="todos" :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo" />
      </div>
    </div>
  </div>

</template>

<script>
// 因为命名标签有可能冲突  加个 My
import MyHeader from "./components/MyHeader";
// 不用引入 item   因为 list 包含 item
import MyList from "./components/MyList";
import MyFooter from "./components/MyFooter";

export default {
  name: "App",
  components: { MyHeader, MyList, MyFooter },
  // 用于wodos是MyHeader和MyFooter组件都在使用，所有放在App中（状态提升）
  data() {
    return {
      // JSON.parse 将数据转换为js对象 localStorage.getItem 获取指定本地存储项的值  
      // 如果没有值放一个空数组   防止报错
      todos:JSON.parse(localStorage.getItem('todos')) || [] 
    }
  },
  methods: {
    // 添加一个todo
    addTodo(todoObj){
      // 输入框内输入后回车将数据放在列表的第一个
      this.todos.unshift(todoObj)
    },
    // 勾选or取消一个todo并且改变vue的done状态相反  逐级传递先给 MyList  然后 MyList 给 MyItem
    checkTodo(id){
      // 遍历 todos 数组
      this.todos.forEach((todo) => {
        // 判断现在选中的todo的id是否与传过来的todo.id相同  如果相同则done的状态取反
        if(todo.id === id) todo.done = !todo.done
      })
    },
    // 删除一个todo
    delteTodo(id){
      // filter 过滤  相当吧过滤完的数据重新赋值给原来的数组
      this.todos = this.todos.filter((todo)=>{
        return todo.id !== id
      })
    },
    // 全选or取消全选
    checkAllTodo(done){
      this.todos.forEach((todo)=>{
        todo.done = done
      })
    },
    // 清除所有已经完成的todo  也就是过滤器筛选出没有选中的目标  然后重新赋值给todos数组
    clearAllTodo(){
      this.todos = this.todos.filter((todo) => {
        return !todo.done
      })
    }
  },
  // 监视
  watch:{
    todos:{
      // 设置深度监视  否则不会监视到数组内元素释放被选中的状态  刷新之后保证事情的完成状态还在
      deep:true,
      handler(value){
        localStorage.setItem('todos',JSON.stringify(value))
      }
    }
  }
};
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}
.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}
.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}
.btn:focus {
  outline: none;
}
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}


</style>



