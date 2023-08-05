<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader @addTodo="addTodo" />
        <!-- 将 todos 交给 MyList -->
        <!-- checkTodo 和 deleteTodo 绑定只能先给子元素 MyList  然后给 MyItem -->
        <!-- 如果使用全局事件总线就不需要 :checkTodo="checkTodo" :delteTodo="deleteTodo" 写在 MyList -->
        <MyList :todos="todos"  />
        <MyFooter :todos="todos" @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo" />
      </div>
    </div>
  </div>

</template>

<script>
// 导入 pubsub
import pubsub from 'pubsub-js'
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
    // 添加一个todo  数据是在 MyHeader 中将用户的输入包装成一个对象然后传过来
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
    // 更新一个todo
    updateTodo(id,title){
      this.todos.forEach((todo) => {
        // 判断现在选中的todo的id是否与传过来的todo.id相同  如果相同则将todo.title改为传过来的title
        if(todo.id === id) todo.title = title
      })
    },
    // 删除一个todo
    deleteTodo(_,id){
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
    },
  },
  // 监视  关于 todos 数组
  watch:{
    todos:{
      // 设置深度监视  否则不会监视到数组内元素释放被选中的状态  刷新之后保证事情的完成状态还在
      deep:true,
      handler(value){
        localStorage.setItem('todos',JSON.stringify(value))
      }
    }
  },
  mounted() {
    // 绑定 methods 里面的 checkTodo 方法  名字命名为相同的 checkTodo
    this.$bus.$on('checkTodo',this.checkTodo)
    this.$bus.$on('updateTodo',this.updateTodo)
    // 挂载完毕订阅消息 deleteTodo 是订阅名  因为方法第一参数是发布的名字所以需要站位  第二个参数才是数据
    this.pubid = pubsub.subscribe('deleteTodo',this.deleteTodo)
    
  },
  beforeDestroy() {
    this.$bus.$off('checkTodo')
    this.$bus.$off('updateTodo')
    pubsub.unsubscribe(this.pubid)
  },
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
.btn-edit {
  color: #fff;
  background-color: skyblue;
  border: 1px solid rgb(11, 174, 238);
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



