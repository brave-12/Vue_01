<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
          <!-- 跳转路由并携带query参数传输 -->
          <!-- 首先绑定to的字符串写法  然后双引号内容加模板字符串符号  然后数据用${}绑定就行  -->
          <!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp; -->

          <!-- 跳转路由并携带query参数传输  to的对象写法  如果数据多就用对象写法  -->
          <router-link :to="{
              path:'/home/message/detail',
              query:{
                  id:m.id,
                  title:m.title
                }
              }">{{m.title}}</router-link>&nbsp;&nbsp;

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
};
</script>

