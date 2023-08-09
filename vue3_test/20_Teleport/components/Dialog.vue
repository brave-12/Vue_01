<template>
  <div>
    <button @click="isShow=true">点我弹窗</button>
    <!-- Teleport 是一种能够将我们的组件html结构移动到指定位置的技术。 to 表示弹窗到的位置 -->
    <teleport to="body">
    <!-- 遮罩层 -->
      <div v-if="isShow" class="mask">
        <!-- 弹窗 -->
        <div class="dialog">
          <h3>我是一个弹窗</h3>
          <h4>一些内容</h4>
          <h4>一些内容</h4>
          <h4>一些内容</h4>
          <button @click="isShow=false">关闭弹窗</button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Dialog",
  setup() {
    let isShow = ref(false);

    return { isShow };
  }
};
</script>

<style>
.dialog {
  position: absolute;
  margin-left: 50%;
  margin-top: 25%;
  width: 300px;
  height: 300px;
  background-color: green;
}
/* 背景添加一个遮罩 */
.mask{
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;
    background-color: rgba(0, 0, 0, 0.5);
}
</style>