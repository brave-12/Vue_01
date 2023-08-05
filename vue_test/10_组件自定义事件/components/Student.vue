<template>
	<div class="student">
		<h2>学生姓名：{{name}}</h2>
		<h2>学生性别：{{sex}}</h2>
		<button @click="sendStudentName">把学生名给App</button>
		<!-- 解绑之后上面的按钮就失效了 -->
		<button @click="unbind">解绑atguigu事件</button>
		<!-- 基于vc的响应式事件都不能调用  但是log之类的还能调用 -->
		<button @click="death">销毁当前Student组件的实例(vc)</button>
	</div>
</template>

<script>
	export default {
		name:'Student',
		data() {
			return {
				name:'张三',
				sex:'男'
			}
		},
		methods: {
			sendStudentName(){
				// 其实它的作用就是触发自定义函数
				// 触发Student组件实例身上的atguigu事件  第二个参数传给父组件name参数
				this.$emit('atguigu',this.name)
			},
			unbind(){
				// 解绑一个自定义事件
				// this.$off('atguigu')
				// 解绑多个自定义事件
				// this.$off(['atguigu','demo'])
				// 解绑所有自定义事件
				this.$off()

			},
			death(){
				// 销毁当前Student组件的实例(vc)  销毁后所有Student实例的自定义事件全都不奏效
				this.$destroy()
			}
		},
	}
</script>

<style scoped>
	.student{
		background-color: pink;
		padding: 5px;
		margin-top: 5px
	}
</style>
