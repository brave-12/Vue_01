<template>
  <div class="container">
    <!-- 
      插槽：让父组件可以向子组件指定位置插入html结构，也是一种组件间通信的方式，
      适用于 <strong style="color:red">父组件 ===> 子组件</strong> 。
      分类：默认插槽、具名插槽、作用域插槽 
    -->

    <Category title="游戏" >
      <!-- 代码外面必须嵌套一个 template  然后 scope 随便写一个接收的名字 通过接收的数组 atguigu.games 渲染 -->
      <!-- 2.5版本作用域插槽的 scope 属性已替换为 slot-scope  并且新的还可以用于普通元素，以表示作用域的插槽 -->
      <template slot-scope="atguigu">
        <ul>
          <li v-for="(g,index) in atguigu.games" :key="index">{{g}}</li>
        </ul>
      </template>
    </Category>

    <Category title="游戏" >
      <template slot-scope="atguigu">
      <ol>
        <li v-for="(g,index) in atguigu.games" :key="index">{{g}}</li>
      </ol>
      </template>
    </Category>

    <Category title="游戏" >
      <template slot-scope="atguigu">
          <h4 v-for="(g,index) in atguigu.games" :key="index">{{g}}</h4>
      </template>
    </Category>

  </div>
</template>

<script>
import Category from './components/Category'

export default {
  name: "App",
  components:{Category},
  
 
};
</script>

<style>
.container,.foot{
  display: flex;
  justify-content: space-around；
}
h3{
  text-align: center;
  background-color: orange;
}
video{
  width:100%;
}
img{
  width: 100%;
}
.Category{
  margin-left: 40px;
}
</style>
