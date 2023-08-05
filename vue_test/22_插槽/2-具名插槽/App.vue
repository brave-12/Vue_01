<template>
  <div class="container">
    <!--  Category 类别 -->
    <!-- 由于更爱了数据只显示图片 因此 :listData="foods" 不用再传数据过去遍历了 -->
    <Category title="美食">
      <!-- slot 的名字用于放在 Category 的具体对应的slot标签中 -->
      <img slot="center" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
      <a slot="footer" href="https://www.atguigu.com">更多美食</a>
    </Category>

    <Category title="游戏" >
      <!-- 因为 Category 渲染的都不一样  所以将要循环的语句拿过来 -->
      <!-- v-for 可以绑定数据到数组来渲染一个列表   index 为参数值为当前项的索引 -->
      <ul slot="center">
        <li v-for="(g,index) in games" :key="index">{{g}}</li>
      </ul>
      <!-- 如果后面加 &nbsp 不会解析 -->
      <div class="foot" slot="footer">
        <a href="https://www.atguigu.com">单机游戏</a>
        <a href="https://www.atguigu.com">网络游戏</a>
      </div>
    </Category>

    <Category title="电影" :listData="films">
      <!-- 添加 controls 就可以播放视频了 -->
      <video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
      <!-- 由于 template 不被解析  而且下面的标签 slot="footer" 要写好几次 因此包裹一个 template 然后赋予 -->
      <!-- 但是 v-slot:footer 仅仅只能在 template 解析的新写法   -->
      <template v-slot:footer>
        <div class="foot">
          <a href="https://www.atguigu.com">经典</a>
          <a href="https://www.atguigu.com">热门</a>
          <a href="https://www.atguigu.com">推荐</a>
        </div>
        <h4 class="foot">欢迎前来观看</h4>
      </template>
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
.container,.foot{
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
