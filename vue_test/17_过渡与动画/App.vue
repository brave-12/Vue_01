<template>
  <div>
    <Test/>
    <Test2/>
    <Test3/>
  </div>
</template>


<script>
// 引入 Test 组件
import Test from "./components/Test";
import Test2 from "./components/Test2";
import Test3 from "./components/Test3";

export default {
  name: 'App',
  components: {Test,Test2,Test3},

};
</script>

