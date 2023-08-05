<template>

	<div class="app">
		<!-- v-bind：是用来绑定属性的。缩写 :     v-on：用来绑定事件的。 缩写  @
		 v-on使用的时候一般写在methods方法里面 v-bind使用的时候一般写在data里面。 -->
		<h1>{{msg}}，学生姓名是{{studentName}}</h1>

		<!-- 能在App里面写School等标签就说明有父子关系 -->
		<!-- 通过父组件给子组件传递函数类型的props实现：子给父传数据 -->
		<School :getSchoolName="getSchoolName" />

		<!-- 通过父组件给子组件传递函数类型的props实现：子给父传数据(第一种写法：使用@或v-on) -->
		<!-- atguigu.once  只能触发一次 atguigu 事件   demo事件名  m1回调名  -->
		<!-- @click写在Student中会被认为是自定义组件  加上native就没问题了 -->
		<Student v-on:atguigu="getStudentName" @click.native="show"  />

		<!-- 通过父组件给子组件传递函数类型的props实现：子给父传数据(第二种写法：使用ref) 灵活可以加定时器等 -->
		<!-- <Student ref="student" /> -->

	</div>
</template>

<script>
// ## 组件的自定义事件
// // 1. 一种组件间通信的方式，适用于：子组件 ===> 父组件
// 使用场景：A是父组件，B是子组件，B想给A传数据，
// 那么就要在A中给B绑定自定义事件（事件的回调在A(父组件)中）

	import Student from './components/Student'
	import School from './components/School'

	export default {
		name:'App',
		components:{School,Student},
		data() {
			return {
				msg:'你好啊',
				studentName:''
			}
		},
		methods: {
			// vue中子传父参数的方法共有两种： 1、通过自定义组件传输 2、子组件通过emit传输
			getSchoolName(name){
				console.log('App收到了学校名:',name);
				
			},
			// 如果有多个数据 getStudentName(name,x,y) 可以接收多个数据
			// getStudentName(name,..params) name正常传入  ..params 让其他所有传入的数据变成一个数据
			getStudentName(name){
				console.log('App收到了学生名:',name);
				this.studentName = name
			},

		},
		mounted() {
			// // 3s之后点击按钮才能触发事件   更加灵活
			// setTimeout(() => {
			// 	// $once  只能触发一次点击事件   因为 atguigu 是Student.vue里面的 
			// 	// 所以在$on里面直接写函数而不是调用methods方法的时候，this指向的是Student，写成箭头函数就没事
			// 	// 如果是下面的方法this虽然也是先指向Student 但是methods内的this指向顶掉了原来的this指向
			// 	this.$refs.student.$on('atguigu',this.getStudentName)

			// }, 3000);
		},
	}
</script>

<style scoped>
	.app{
		background-color: gray;
		padding: 5px
	}
</style>
