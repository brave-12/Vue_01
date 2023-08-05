<template>
<!-- 如果 total 为0  则 v-show 让整个div不展示 -->
  <div class="todo-footer" v-show="total" >
    <label>
      <!-- 方法一 -->
      <!-- <input type="checkbox" :checked="isAll" @change="checkAll" /> -->
      <input type="checkbox" v-model="isAll" />
    </label>
    <span>
      <!-- 根据列表个数返回全部情况 -->
      <span>已完成{{doneTotal}}</span> / 全部{{total}}
    </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props:['todos'],
  computed:{
    total(){
      return this.todos.length
    },
    // 判断完成个数并且输出到下面
    doneTotal(){
      // let i = 0
      // this.todos.forEach( todo => {
      //   if(todo.done) i++
      // });
      // return i

      // .reduce 调用次数是根据数组长度  pre 是上一次的值 最后的0代表初始值   current 是数组
      // 因为就一句话所以箭头函数可以简写
      return this.todos.reduce((pre,todo)=> pre + (todo.done ? 1 : 0),0)
    },
    // 一个计算属性可以通过另外两个计算属性计算出来(套娃)
    // 通过 && 与逻辑  判断 this.total > 0 个数大于0 否则不勾选

    // 方法一
    // isAll(){
    //   return this.doneTotal === this.total && this.total > 0
    // }

    // v-model 双向绑定  然后 get() 和 set() 的完整写法 就可以替代方法一的写法
    isAll:{
      get(){
        return this.doneTotal === this.total && this.total > 0
      },
      set(value){
        // this.checkAllTodo(value)
        this.$emit('checkAllTodo',value)
      }
    }
  },
  methods: {
    // 点击总体选择框  然后其他选择框全选或者全不选
    // 方法一
    // checkAll(e){   
    //   this.checkAllTodo(e.target.checked)
    // }

    clearAll(){   
      // this.clearAllTodo()
      this.$emit('clearAllTodo')
    }

  },
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>