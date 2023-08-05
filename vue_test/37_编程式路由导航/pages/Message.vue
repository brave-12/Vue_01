<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">  
          <!-- 首先绑定to的字符串写法  然后双引号内容加模板字符串符号  然后数据用${}绑定就行  -->
          <!-- 跳转路由并携带params参数传输 -->
          <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp; -->

          <!-- 跳转路由并携带params参数传输  to的对象写法  如果数据多就用对象写法  -->
          <!-- name:'xiangqing',  可以通过index文件的name命名替换path路径的写法 -->

          <!-- 如果跳转路由携带params参数  只能用name写法   不能用path写法 -->
          <router-link :to="{
              name:'xiangqing',
              params:{
                  id:m.id,
                  title:m.title
                }
              }"> 
              {{m.title}}
          </router-link>&nbsp;&nbsp;
          
          <!-- ### 编程式路由导航
          1. 作用：不借助```<router-link> ```实现路由跳转，让路由跳转更加灵活 -->
          <button @click="pushShow(m)">push查看</button>
          <!-- 因为 News 和 Message 都是replace替换  因此点击 eplace查看 然后返回会跳回最开始的页面-->
          <button @click="replaceShow(m)">replace查看</button>
      </li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name:'Message',
    data() {
        return {
            messageList:[
                {id:'001',title:'消息001'},
                {id:'002',title:'消息002'},
                {id:'003',title:'消息003'},
            ]
        }
    },
    methods: {
      pushShow(m){
        this.$router.push({
           name:'xiangqing',
            params:{
                id:m.id,
                title:m.title
            }
        })
      },
      replaceShow(m){
        this.$router.replace({
           name:'xiangqing',
            params:{
                id:m.id,
                title:m.title
            }
        })
      }
    },
};
</script>

