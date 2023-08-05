<template>
  <div class="col-xs-offset-2 col-xs-8">
    <div class="page-header">
      <!-- 显示最顶部文字的组件 -->
      <h2>Vue Router Demo</h2>
      <button @click="back">后退</button>
      <button @click="forward">前进</button>
      <button @click="test">测试一下 go </button>
    </div>
  </div>
</template>

<script>
export default {
    name:'Banner',
    methods: {
      back(){
        // back() 后退
        this.$router.back()
      },
      forward(){
        // forward() 前进
        this.$router.forward()
      },
      test(){
        // go()  可前进也可后退
        // go(-2) 的意思就是退后两步  go(3) 就是向前三步  比如可以先退三步然后点击按钮就回来了
        this.$router.go(-2)
      },
    },
};
</script>
