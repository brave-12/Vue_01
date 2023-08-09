<template>
  <h4>当前的sum是:{{sum}}</h4>
  <button @click="sum++">点我x+1</button>
  <hr>
	<h2>姓名：{{name}}</h2>
	<h2>年龄：{{age}}</h2>
	<h2>薪资：{{job.j1.salary}}K</h2>
	<button @click="name+='~'">修改姓名</button>
	<button @click="age++">增长年龄</button>
	<button @click="job.j1.salary++">涨薪</button>
</template>

<script>
// toRefs 与toRef功能一致，但可以批量创建多个 ref 对象，语法：toRefs(person)
	import {ref,reactive,toRef,toRefs,readonly,shallowReadonly} from 'vue'
	export default {
		name: 'Demo',
		setup(){
      //数据
      // shallowReactive：只处理对象最外层(第一层)属性的响应式   也就是读不到 salary
			// let person = shallowReactive({
      let person = reactive({
				name:'张三',
				age:18,
				job:{
					j1:{
						salary:20
					}
				}
      })
      // shallowRef：只处理基本数据类型的响应式, 不进行对象的响应式处理。
      let sum = ref(0)

      // readonly: 让一个响应式数据变为只读的（深只读）不能修改
      // person = readonly(person)
      // shallowReadonly：让一个响应式数据变为只读的（浅只读）  也就是深层次的salary可以修改
      person = shallowReadonly(person)
      

			//返回一个对象（常用）
			return {
        sum,
        ...toRefs(person)

			}
		}
	}
</script>

