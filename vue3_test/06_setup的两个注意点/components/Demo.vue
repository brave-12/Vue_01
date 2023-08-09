<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{person.name}}</h2>
  <h2>年龄：{{person.age}}</h2>
  <button @click="test">测试触发一下Demo组件的hello事件</button>
</template>

<script>
// setup的参数
// - props：值为对象，包含：组件外部传递过来，且组件内部声明接收了的属性。
// - context：上下文对象
//   - attrs: 值为对象，包含：组件外部传递过来，但没有在props配置中声明的属性, 相当于 ```this.$attrs```。
//   - slots: 收到的插槽内容, 相当于 ```this.$slots```。
//   - emit: 分发自定义事件的函数, 相当于 ```this.$emit```。
import {reactive} from 'vue'
export default {
  name: 'Demo',
  props:['msg','school'],
  // 从 App 接收的自定义事件  不写也不会报错就是会黄色警告
  emits:['hello'],
  setup(props,context) {
    // 返回之后说明 setup 比 beforeCreate 执行时间更早
    // context.attrs 相当于 Vue2 中的 $attrs
    // console.log('--setup--',props,context.attrs);
    // 触发自定义事件
    // console.log('--setup--',context.emit);
    // 触发插槽事件
    console.log('--setup--',context.slots);
    // 数据
    let person = reactive({ 
      name:'张三',
      age:18
    })
    // 方法
    function test() {
      context.emit('hello',666)
    }
    // 返回一个对象
    return {
      person,
      test
    }
  }

}
</script>


