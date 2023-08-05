<template>
  <div>
    <Count/>
    <hr>
    <Person/>
  </div>
</template>

<script>
import Count from './components/Count'
import Person from './components/Person'

export default {
  name: "App",
  components:{Count,Person},
  mounted() {
    // 返回this指向的对象
    // console.log('App',this);
  },
 
};
</script>
