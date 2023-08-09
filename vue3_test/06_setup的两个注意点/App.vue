<template>
  <Demo @hello="showHelloMsg" msg="你好" school="尚硅谷">
    <!-- 兼容性问题 v-slot 能传 qwe 过去   但是 slot:"qwe" 就不能传 -->
    <template v-slot:qwe>
      <span>尚硅谷</span>
    </template>
  </Demo>
</template>

<script>
import Demo from './components/Demo'

export default {
  name: 'App',
  components:{Demo},
  setup() {
    function showHelloMsg(value) {
      alert(`你好啊，触发了hello事件，我收到的参数是：${value}`)
    }
    return{
      showHelloMsg
    }
  }
}
</script>


