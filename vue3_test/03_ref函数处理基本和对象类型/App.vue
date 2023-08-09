<template>
<!-- vue3中可以没有根标签 -->
  <h1>一个人的信息</h1>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h3>工作种类：{{job.type}}</h3>
  <h3>工作薪水：{{job.salary}}</h3>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
// 引入 ref   ref函数作用: 定义一个响应式的数据
import {ref} from 'vue'

// ref 函数 作用: 定义一个响应式的数据
// 语法: const xxx = ref(initValue)
// - 创建一个包含响应式数据的引用对象（reference对象，简称ref对象）

export default {
  name: 'App',
  // 此处只是测试一下setup，暂时不考虑响应式的问题
  setup(props) {
    // 数据
    let name = ref('张三')
    let age = ref(18)
    let job = ref({
      type:'前端工程师',
      salary:'30k'
    })

    // 方法
    function changeInfo(){
      // ref 加工过的 张三 本质是一个对象  不能这样直接 name = '张三' 修改
      name.value = '李四'
      age.value = 28
      job.value.type = '前端高级工程师'
      job.value.salary = '40k'
    }

    // 返回一个对象
    return {
      name,
      age,
      job,
      changeInfo,
    }
  }

}
</script>


