<template>
  <ul>
    <!-- ### 两个新的生命周期钩子
    1. 作用：路由组件所独有的两个钩子，用于捕获路由组件的激活状态。
    2. 具体名字：
      1. ```activated```路由组件被激活时触发。
      2. ```deactivated```路由组件失活时触发。 -->
    <li :style="{opacity}">欢迎学习Vue</li>
    <li>news001 <input type="text"></li>
    <li>news002 <input type="text"></li>
    <li>news003 <input type="text"></li>
  </ul>
</template>

<script>
export default {
  name: "News",
  data() {
			return {
				opacity:1
			}
		},

    // 产生一个透明度渐变的效果  并且切换之后 News组件失活了关闭而不是销毁
    // activated()  在当前组件被激活       deactivated()  切走之后是失活
		activated() {
			console.log('News组件被激活了')
			this.timer = setInterval(() => {
				// console.log('@')
				this.opacity -= 0.01
				if(this.opacity <= 0) this.opacity = 1
			},16)
		},
		deactivated() {
      console.log('News组件失活了关闭@输出')
      // 失活清除定时器
			clearInterval(this.timer)
		},
};
</script>