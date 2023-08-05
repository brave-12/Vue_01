<template>
  <div>
    <button @click="getStudents">获取学生信息</button>
    <button @click="getCars">获取汽车信息</button>
  </div>

</template>

<script>
import axios from 'axios'
export default {
  name: "App",
  methods: {
    getStudents(){
      // 这个 8080 不是地址是8080  而是代理服务器的地址    代理服务器在 vue.config.js 内设置    
      // 获取的数据是由代理服务器先向目标服务器获取数据    然后本地再访问代理服务器上的数据
      // 如果 students 在 public 文件夹下已经有这个名字的文件   则会先调用public文件夹下的那个文件内的信息
      // 加上 /atguigu 前缀就走代理    不加 /atguigu 然后public文件夹下有同名文件就不走代理
      axios.get('http://localhost:8080/atguigu/students').then(
        response => {
          console.log('请求成功了',response.data);
        },
        error => {
          console.log('请求失败',error.message);
        },
      )
    },
    getCars(){
      axios.get('http://localhost:8080/demo/cars').then(
        response => {
          console.log('请求成功了',response.data);
        },
        error => {
          console.log('请求失败',error.message);
        },
      )
    },

  },
};
</script>

