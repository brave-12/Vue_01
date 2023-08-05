<template>
  <div>
      <h1>{{msg}}</h1>
      <h2>学生姓名：{{name}}</h2>
      <h2>学生性别：{{sex}}</h2>
      <!-- age*1+1 age 传过来的是字符串类型  用*1转成数值类型  然后才能+1让年龄加一 -->
      <!-- 或者直接在props将age定义成number类型 -->
      <h2>学生年龄：{{MyAge+1}}</h2>
      <button @click="updateAge">修改收到的年龄</button>
  </div>
</template>

<script>
export default {
    name:'Student',
    data(){
        return {
            msg:'尚硅谷',
            MyAge:this.age
            // name:'张三',
            // sex:'男',
            // age:18
        }
    },
    methods: {
        updateAge(){
            this.MyAge++
        }
    },
    // props配置项 让组件接收外部传过来的数据   可以不按顺序  
    // 在网页vue插件中也可以体现出来data内定义的数据以及props内定义的数据
    // 并且尽量不要修改props传过来的数据  比如不要通过methods定义方法修改  会报错
    
    // 备注：props是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告，若业务需求确实需要修改，
    // 那么请复制props的内容到data中一份，然后去修改data中的数据。


    // 简单接收  如果没用到的值不声明
    // props:['name','sex','age']

    // 接收的同时对数据进行类型限制
    // props:{
    //     name:String,
    //     age:Number,
    //     sex:String
    // }

    // 接收的同时对数据：进行类型限制+默认值的指定+必要性的限制
    props:{
        name:{
            type:String,  // name 的类型是字符串
            required:true   // name 是必要的
        },
        age:{
            type:Number,
            default: 28   // 设置默认值   如果没有 age 传参则按默认值输出
        },
        sex:{
            type:String,
            required:true
        },
    }


}
</script>

<style>

</style>