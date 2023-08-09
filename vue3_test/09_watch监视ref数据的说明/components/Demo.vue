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
    // 如果对象用的是ref  则会自动使用 reactive 的 proxy
    // let person = reactive({
    let person = ref({
      name:'张三',
      age:18,
      job:{
        j1:{
          salary:20
        }
      }
    })

    // 不能监视 sum.value 因为相当于读取到的是0  而监视的其实是结构
    watch(sum,(newValue,oldValue)=>{
      console.log('sum的值变化了',newValue,oldValue);
    })

    // 当对象person使用的是ref的时候  需要person.value(也就是相当于reactive的数据)才能监测到
    // 方法一
    watch(person.value,(newValue,oldValue)=>{
      console.log('person的值变化了',newValue,oldValue);
    })
    // 方法二
    watch(person,(newValue,oldValue)=>{
      console.log('person的值变化了',newValue,oldValue);
    },{deep:true})
    

    // 返回一个对象
    return {
      sum,
      msg,
      person
    }
  }

}
</script>


