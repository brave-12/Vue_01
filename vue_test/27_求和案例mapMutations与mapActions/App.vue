<template>
  <div>
    <Count/>
  </div>
</template>

<script>
import Count from './components/Count'

export default {
  name: "App",
  components:{Count},
  mounted() {
    // 返回this指向的对象
    // console.log('App',this);
  },
 
};
</script>
