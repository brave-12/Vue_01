<template>
  <div>
    <div class="row">
      <!-- 顶部组件 -->
      <Banner/>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
			<!-- 1. 路由组件通常存放在```pages```文件夹，一般组件通常存放在```components```文件夹。
			2. 通过切换，“隐藏”了的路由组件，默认是被销毁掉的，需要的时候再去挂载。
			3. 每个组件都有自己的```$route```属性，里面存储着自己的路由信息。
			4. 整个应用只有一个router，可以通过组件的```$router```属性获取到。 -->

		  <!-- 原始html中我们使用a标签实现页面的跳转  href 是跳转的页面 -->
          <!-- <a class="list-group-item active" href="./about.html">About</a>
          <a class="list-group-item" href="./home.html">Home</a> -->


		  <!-- Vue Router 可以在不重新加载页面的情况下更改 URL -->
		  <!-- active-class 点击之后会变化写入样式  如果是网页改变也会更改对应样式 -->
		  <!-- 借助 router-link 是通过 to="/about" 的形式改变路径  而且在渲染的时候会自动变回a标签 -->
      <!-- :to="{name:'guanyu'}"   也可以通过这种方式书写路径  name在index文件里面定义 -->
		  <router-link class="list-group-item" active-class="active" to="/about">About</router-link>
          <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
			  <!-- 指定组件内容的呈现位置 -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from './components/Banner'
export default {
  name: "App",
  components:{Banner},
};
</script>
