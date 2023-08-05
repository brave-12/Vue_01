<template>
  <li>
    <label>
      <!-- checked 加个绑定   然后根据 todo.done 的布尔值判断true和false 并且勾选框 -->
      <!-- 设置勾选框可以通过 @click 或者 @change 绑定事件的状态 -->
      <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)" />
      <!-- 但是不推荐：如果是checkbox则可以直接  v-model 双向绑定然后就能实现功能  不需要逐级传递改变数据 -->
      <!-- 双向数据绑定不能是 props 传入的数据  因为 props 内的数据改变会报错 即使暂时不会报错也困难能影响后续 -->
      <!-- <input type="checkbox" v-model="todo.done" /> -->

      <!-- v-show 哪个为真展示哪个  所以可以用true或者false值进行两个标签的显示切换 -->
      <span v-show="!todo.isEdit" >{{todo.title}}</span>
      <!-- @blur 失去焦点事件 -->
      <input 
      v-show="todo.isEdit" 
      type="text" 
      :value="todo.title" 
      @blur="handleBlur(todo,$event)"
      ref="inputTitle"
       >
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)" >删除</button>
    <!-- 编辑按钮点击之后 v-show="!todo.isEdit" 然后按钮消失  修改框出现 -->
    <button v-show="!todo.isEdit" class="btn btn-edit" @click="handleEdit(todo)" >编辑</button>
  </li>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name: "MyItem",
  // 声明接收 todo 对象
  props:['todo'],
  methods: {
    // 勾选状态取反  借助全局事件总线 $bus 完成  没有经过 MyList  因此不需要这个写法 this.checkTodo(id) 
    handleCheck(id){
      // 通知 App 组件将对应todo对象的done值取反
      // this.checkTodo(id)
      this.$bus.$emit('checkTodo',id)
    },
    // 删除
    handleDelete(id){
      // confirm () 方法用于显示一个带有指定消息和 OK 及取消按钮的对话框
      // if(confirm('确定删除吗？')){
      //   // this.deleteTodo(id)
      //   this.$bus.$emit('deleteTodo',id)
      // }
      // 发布消息   deleteTodo 发布消息的名字  与App内订阅名相同
      if(confirm('确定删除吗？')){
        pubsub.publish('deleteTodo',id)
      }
      
    },
    // 编辑
    handleEdit(todo){
      // 判断如果todo身上已经有isEdit  将状态改为true就好  不用再追加一个isEdit
      // hasOwnProperty  判断 todo 身上是否有 isEdit 属性
      if(todo.hasOwnProperty('isEdit')){
        todo.isEdit = true
      }else{
        // 在 todo 身上追加一个 isEdit
        this.$set(todo,'isEdit',true)
      }
      // 因为模板解析需要时间    所以比较笨的方法设置一个定时器  但是有效
      // setTimeout(() => {
      //   this.$refs.inputTitle.focus()
      // }, 100);

      // 自动获取输入框的焦点   但是要等 if 判断语句然后即系模板之后获取焦点
      // this.$nextTick(function(){})  在模板解析之后 也就是DOM节点更新之后再执行回调
      // nextTick使用时间：当改变数据后，要基于更新后的新DOM进行某些操作时，要在nextTick所指定的回调函数中执行。
      this.$nextTick(function () {
        this.$refs.inputTitle.focus()
      })
      
    },
    // 失去焦点的回调事件（真正执行修改逻辑）
    handleBlur(todo,e){
      todo.isEdit = false
      // 判断防止修改数据全部删除为空
      if(!e.target.value.trim()) return alert('输入不能为空')
      // $emit内写要传过去段位制   todo.id 为要修改对象的id  e.target.value 为输入框的值
      this.$bus.$emit('updateTodo',todo.id,e.target.value)
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