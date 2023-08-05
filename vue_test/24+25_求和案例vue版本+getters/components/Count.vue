<template>
  <div>
      <h1>当前求和为：{{$store.state.sum}}</h1>
      <h3>当前求和放大10倍后为：{{$store.getters.bigSum}}</h3>
      <select v-model.number="n">
          <!-- 因为要计算所以不能是字符串的123  所以可以加冒号  因为加了冒号绑定可以直接以js解析  -->
          <!-- 或者也可以上面写  v-model.number="n"  强制转换为数字类型  -->
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
      </select>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <button @click="incrementOdd">当前求和为奇数再加</button>
      <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
export default {
    name:"Count",
    data() {
        return {
            n:1,  // 用户选择的数字
        }
    },
    methods: {
        // JIA 和 JIAN 直接提交使用 mutations 中的方法    因为没有其他操作
        increment(){
            this.$store.commit('JIA',this.n)
        },
        decrement(){
            this.$store.commit('JIAN',this.n)
        },
        incrementOdd(){
            this.$store.dispatch('jiaOdd',this.n)
        },
        incrementWait(){
            this.$store.dispatch('jiaWait',this.n)
        },
    },
    mounted() {
        // console.log(this.$store.$sum.bigSum); 
    },
}
</script>

<style lang="css">
    button{
        margin-left: 5px
    }
</style>

