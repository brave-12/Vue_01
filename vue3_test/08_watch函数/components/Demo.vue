<template>
 <h2>当前求和为：{{sum}}</h2>
 <button @click="sum++">点我+1</button>
 <hr>
 <h2>当前的信息为：{{msg}}</h2>
 <button @click="msg+='!'">修改信息</button>
 <hr>
 <h2>姓名：{{person.name}}</h2>
 <h2>年龄：{{person.age}}</h2>
 <h2>薪资：{{person.job.j1.salary}}k</h2>
 <button @click="person.name+='~'">修改姓名</button>
 <button @click="person.age++">增长年龄</button>
 <button @click="person.job.j1.salary++">增长薪资</button>

</template>

<script>
import {ref,watch,reactive} from 'vue'
export default {
  name: 'Demo',
  setup() {
    // 数据
    let sum = ref(0)
    let msg = ref('你好啊')
    let person = reactive({
      name:'张三',
      age:18,
      job:{
        j1:{
          salary:20
        }
      }
    })

    // 情况一：监视ref所定义的响应式数据
    // watch(sum,(newValue,oldValue)=>{
    //   console.log('sum值变化了',newValue,oldValue);
    // })

    // 情况二：监视ref所定义的多个响应式数据   而 newValue,oldValue  返回的数据也会是一个数组
    // immediate:true 直接先运行一次
    watch([sum,msg],(newValue,oldValue)=>{
      console.log('sum或msg值变化了',newValue,oldValue);
    },{immediate:true})

    // 情况三：监视reactive所定义的一个响应式数据  此处无法正确获取 oldValue 如果是需要这个就单独领出来用ref定义
    // 也就是对象类型的 oldValue 不能使用
    // 强制开启深度监视(deep配置无效)  本身就有深度监视的效果例如 salary
    watch(person,(newValue,oldValue)=>{
      console.log('person的值变化了',newValue,oldValue);
    })

    // 情况四：监视reactive所定义的一个响应式数据中的某个属性
    watch(()=>person.age,(newValue,oldValue)=>{
      console.log('person的age变化了',newValue,oldValue);
    })

    // 情况五：监视reactive所定义的一个响应式数据中的某些属性
    watch([()=>person.age,()=>person.name],(newValue,oldValue)=>{
      console.log('person的age和name变化了',newValue,oldValue);
    })

    // 特殊情况：监视的是job  但是改变的是job内的salary
    watch(()=>person.job,(newValue,oldValue)=>{
      console.log('person的job变化了',newValue,oldValue);
    },{deep:true}) //此处由于监视的是reactive所定义的对象中的某个属性  所以deep配置有效


    // 返回一个对象
    return {
      sum,
      msg,
      person
    }
  }

}
</script>


