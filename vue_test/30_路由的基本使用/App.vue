<template>
  <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header">
          <h2>Vue Router Demo</h2>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
		  <!-- 原始html中我们使用a标签实现页面的跳转  href 是跳转的页面 -->
          <!-- <a class="list-group-item active" href="./about.html">About</a>
          <a class="list-group-item" href="./home.html">Home</a> -->

		  <!-- Vue Router 可以在不重新加载页面的情况下更改 URL -->
		  <!-- active-class 点击之后会变化写入样式  如果是网页改变也会更改对应样式 -->
		  <!-- 借助 router-link 是通过 to="/about" 的形式改变路径  而且在渲染的时候会自动变回a标签 -->
		  <router-link class="list-group-item" active-class="active" to="/about">About</router-link>
          <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>

        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
			  <!-- 指定组件的呈现位置 -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>
