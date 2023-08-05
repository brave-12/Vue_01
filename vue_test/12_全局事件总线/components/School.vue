<template>
	<div class="school">
		<h2>学校名称：{{name}}</h2>
		<h2>学校地址：{{address}}</h2>
	</div>
</template>

<script>
	export default {
		name:'School',
		data() {
			return {
				name:'尚硅谷atguigu',
				address:'北京',
			}
		},
		// x会先从vc身上查找，然后去vm身上查找，最后vue上查找(刚刚在main中定义了x)
		mounted() {
			// console.log('School组件',this.$bus);

			// 接收数据：A组件想接收数据，则在A组件中给$bus绑定自定义事件，事件的回调留在A组件自身
			// this.$bus 上的 hello 事件
			this.$bus.$on('hello',(data)=>{
				console.log('我是School组件，收到了数据',data);
			})
		},
		// 防止 $bus 上的 hello 在销毁之后占用空间   因此 beforeDestroy(销毁之前) 删除空间
		beforeDestroy(){
			this.$bus.$off('hello')
		}
	}
</script>

<style scoped>
	.school{
		background-color: skyblue;
		padding: 5px
	}
</style>