<template>
  <div>
    <h2>Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
        </li>
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
        </li>
      </ul>
      <!-- ### .缓存路由组件
      1. 作用：让不展示的路由组件保持挂载，不被销毁 -->
      <!-- <keep-alive> 包裹动态组件时，会缓存不活动的组件实例，而不是销毁他们  切换回来的时候数据不会消失  -->
      <!-- include 是选择哪些组件需要缓存数据  include后面的名字是组件名  也就是News内的name -->
      <!-- 如果是缓存多个通过数组绑定 :include=['News','Message']  -->
      <keep-alive include="News">
          <router-view></router-view>     
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  beforeDestroy() {
    // Home 切换到 About 的时候输出   说明了网页组件切换的时候原来的组件会被销毁
    console.log("Home组件即将被销毁了");
  }
};
</script>

<style>
</style>