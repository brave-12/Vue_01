<template>
<!-- vue3中可以没有根标签 -->
  <h1>一个人的信息</h1>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2 v-show="job.sex">性别：{{job.sex}}</h2>
  <h3>工作种类：{{job.type}}</h3>
  <h3>工作薪水：{{job.salary}}</h3>
  <h3>爱好：{{hobby}}</h3>
  <h3>测试的数据：{{job.a.b.c}}</h3>
  <button @click="changeInfo">修改人的信息</button>
  <button @click="addSex">添加一个sex属性</button>
  <button @click="deleteType">删除一个type属性</button>

</template>

<script>
// 引入 ref   ref函数作用: 定义一个响应式的数据
// 引入 reactive   定义一个对象类型的响应式数据
import {ref,reactive} from 'vue'

export default {
  name: 'App',
  // 此处只是测试一下setup，暂时不考虑响应式的问题
  setup(props) {
    // 数据
    let name = ref('张三')
    let age = ref(18)
    let job = reactive({
      type:'前端工程师',
      salary:'30k',
      a:{
        b:{
          c:666
        }
      }
    })
    let hobby = reactive(['学习','玩游戏','喝酒'])

    // 将两种数据类型都通过 reactive 写  但是在方法中和template中的相关数据都要加reactive
    // let person = reactive({
		// 		name:'张三',
		// 		age:18,
		// 		job:{
		// 			type:'前端工程师',
		// 			salary:'30K',
		// 			a:{
		// 				b:{
		// 					c:666
		// 				}
		// 			}
		// 		},
		// 		hobby:['抽烟','喝酒','烫头']
		// 	})

    // 方法
    function changeInfo(){
      // ref 加工过的 张三 本质是一个对象  不能这样直接 name = '张三' 修改
      name.value = '李四'
      age.value = 28
      // job.value.type = '前端高级工程师'
      // job.value.salary = '40k'

      // 对象类型用 reactive  就不需要写 value  直接改
      job.type = '前端高级工程师'
      job.salary = '40k'
      // reactive 处理 c 对象是深层次的
      job.a.b.c = 999
      hobby[0] = '做作业'
    }

    function addSex(){
      job.sex = '男'
    }
    function deleteType(){
      delete job.type
    }


    // 返回一个对象
    return {
      name,
      age,
      job,
      hobby,
      changeInfo,
      addSex,
      deleteType
    }
  }

}
</script>


