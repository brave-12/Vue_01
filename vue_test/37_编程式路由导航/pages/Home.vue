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
      <router-view></router-view>
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