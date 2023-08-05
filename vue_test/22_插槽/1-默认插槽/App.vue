<template>
  <div class="container">
    <!--  Category 类别 -->
    <!-- 由于更爱了数据只显示图片 因此 :listData="foods" 不用再传数据过去遍历了 -->
    <Category title="美食">
      <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
    </Category>

    <Category title="游戏" :listData="games">
      <!-- 因为 Category 渲染的都不一样  所以将要循环的语句拿过来 -->
      <!-- v-for 可以绑定数据到数组来渲染一个列表   index 为参数值为当前项的索引 -->
      <ul>
        <li v-for="(g,index) in games" :key="index">{{g}}</li>
      </ul>
    </Category>

    <Category title="电影" :listData="films">
      <!-- 添加 controls 就可以播放视频了 -->
      <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
    </Category>

  </div>
</template>

<script>
import Category from './components/Category'

export default {
  name: "App",
  components:{Category},
  data() {
			return {
				foods:['火锅','烧烤','小龙虾','牛排'],
				games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
				films:['《教父》','《拆弹专家》','《你好，李焕英》','《尚硅谷》']
			}
		},
 
};
</script>

<style>
.container{
  display: flex;
  justify-content: space-around
}
h3{
  text-align: center;
  background-color: orange;
}
video{
  width:100%;
}
img{
  width: 100%;
}
</style>
