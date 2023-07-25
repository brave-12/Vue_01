<template>
<!-- Vue里面只支持这三个标签 template script style -->
<!-- 组件的结构    <template> 本身不参与编译 -->
	<div class="demo">
		<h2>学校名称：{{name}}</h2>
		<h2>学校地址：{{address}}</h2>
		<button @click="showName">点我提示学校名</button>	
	</div>
</template>

<script>
// 组件交互相关代码（数据、方法等）
// export default  默认暴露   因为一般 import 导入到其他文件
	 export default {
		name:'School',
		data(){
			return {
				name:'尚硅谷',
				address:'北京昌平'
			}
		},
		methods: {
			showName(){
				alert(this.name)
			}
		},
	}
</script>

<style>
/* 组件的样式 */
	.demo{
		background-color: orange;
	}
</style>