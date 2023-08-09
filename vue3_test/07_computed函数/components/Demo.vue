<template>
  <h1>一个人的信息</h1>
  姓: <input type="text" v-model="person.firstName">
  <br>
  名: <input type="text" v-model="person.lastName">
  <br>
  <span>全名：{{person.fullName}}</span>
  <br>
  全名：<input type="text" v-model="person.fullName">
</template>

<script>
import {reactive,computed} from 'vue'
export default {
  name: 'Demo',
  // vue2 的写法
  // computed:{
  //   fullName(){
  //     return this.person.firstName + '-' + this.person.lastName
  //   }
  // },
  setup() {
    // 数据
    let person = reactive({ 
      firstName:'张',
      lastName:'三',
      age:18
    })
    
    // 方法
    function test() {
      context.emit('hello',666)
    }

    // 计算属性(简写)   没有考虑计算属性被修改的情况
    // let fullName 为了方便不用再在return一个 fullName   可以直接 person.fullName 在person上追加
    // person.fullName = computed(()=>{
    //   return person.firstName + '-' + person.lastName
    // })

    // 计算属性(完整写法)  计算属性能修改在set  与vue2配置一致
    person.fullName = computed({
      get(){
        return person.firstName + '-' + person.lastName
      },
      set(value){
        // 根据 - 符号拆分名字
        const nameArr = value.split('-')
        person.firstName = nameArr[0]
        person.lastName = nameArr[1]

      }
    })

    // 返回一个对象
    return {
      person,
      test,
    }
  }

}
</script>


