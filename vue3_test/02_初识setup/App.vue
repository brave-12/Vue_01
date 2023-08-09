<template>
<!-- ## 拉开序幕的setup

1. 理解：Vue3.0中一个新的配置项，值为一个函数。
2. setup是所有Composition API（组合API）“ 表演的舞台 ”。
3. 组件中所用到的：数据、方法等等，均要配置在setup中。
4. setup函数的两种返回值：
   1. 若返回一个对象，则对象中的属性、方法, 在模板中均可以直接使用。（重点关注！）
   2.若返回一个渲染函数：则可以自定义渲染内容。（了解）
5. 注意点：
   1. 尽量不要与Vue2.x配置混用
      - Vue2.x配置（data、methos、computed...）中可以访问到setup中的属性、方法。
      - 但在setup中不能访问到Vue2.x配置（data、methos、computed...）。
      - 如果有重名, setup优先。
   2. setup不能是一个 async 函数，因为返回值不再是return的对象, 而是promise, 模板看不到return对象中的属性
   。（后期也可以返回一个Promise实例，但需要Suspense和异步组件的配合） -->

<!-- vue3中可以没有根标签 -->
  <h1>一个人的信息</h1>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <button @click="sayHello">说话</button>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  // 此处只是测试一下setup，暂时不考虑响应式的问题
  setup(props) {
    // 数据
    let name = '张三'
    let age = 18

    // 方法
    // 虽然vue2和vue3的方法都能写    而且vue2可以使用vue3的方法和数据  但是vue3不能使用vue2的方法和数据  
    // 建议vue2和vue3的配置不要混用  如果是vue3的环境建议直接使用vue3的写法
    function sayHello(){
      alert(`我叫${name},我${age}岁了,你好啊`)
    }

    return {
      name,
      age,
      sayHello
    }
  }

}
</script>


