<template>
	<div class="school">
		<h2>学校名称：{{name}}</h2>
		<h2>学校地址：{{address}}</h2>
	</div>
</template>

<script>
import pubsub from 'pubsub-js'
	export default {
		name:'School',
		data() {
			return {
				name:'尚硅谷atguigu',
				address:'北京',
			}
		},

		mounted() {
			// msgName 是消息的名字    b 是传递的数据
			// 不能使用 const x = 的形式   不然 beforeDestroy 读不到数据  使用 this.的形式
			this.pubId = pubsub.subscribe('hello',function (msgName,b) {
				console.log('有人发布了hello消息，hello消息的回调执行了',msgName,b);
			})
		},
		// 防止 $bus 上的 hello 在销毁之后占用空间   因此 beforeDestroy(销毁之前) 删除空间
		beforeDestroy(){
			// this.$bus.$off('hello')
			// 取消发布
			pubsub.unsubscribe(this.pubId)
		}
	}
</script>

<style scoped>
	.school{
		background-color: skyblue;
		padding: 5px
	}
</style>