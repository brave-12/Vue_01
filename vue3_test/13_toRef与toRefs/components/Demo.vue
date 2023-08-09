<template>
  <h2>{{person}}</h2> 
	<h2>姓名：{{name}}</h2>
	<h2>年龄：{{age}}</h2>
	<h2>薪资：{{job.j1.salary}}K</h2>
	<button @click="name+='~'">修改姓名</button>
	<button @click="age++">增长年龄</button>
	<button @click="job.j1.salary++">涨薪</button>
</template>

<script>
// toRefs 与toRef功能一致，但可以批量创建多个 ref 对象，语法：toRefs(person)
	import {reactive,toRef,toRefs} from 'vue'
	export default {
		name: 'Demo',
		setup(){
			//数据
			let person = reactive({
				name:'张三',
				age:18,
				job:{
					j1:{
						salary:20
					}
				}
      })

      // 创建一个 ref 对象，其value值指向另一个对象中的某个属性
      const name2 = toRef(person,'name')
      console.log(name2);

      const x = toRefs(person)
      console.log(x);
      

			//返回一个对象（常用）
			return {
        person,
        // 不能这样赋值因为 person.name 本质上就是个字符串 '张三' 只是把字符串给name 不会引起数据的变化
        // name:person.name,
        // ref写法虽然能实现功能 但是是相当于更改了name新写了个ref(person.name)  原来person内的name没用到了
        // name:ref(person.name)

        // name:toRef(person,'name'),
        // age:toRef(person,'age'),
        // // 因为 salary 是深层次的    所以前面直接定义 person.job.j1
        // salary:toRef(person.job.j1,'salary')

        // 但是 toRefs 只会看第一层的对象  深层对象 salary 不会看
        ...toRefs(person)

			}
		}
	}
</script>

