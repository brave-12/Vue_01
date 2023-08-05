<template>
  <div>
      <h1>当前求和为：{{sum}}</h1>
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
            sum:0  // 当前的和
        }
    },
    methods: {
        increment(){
            this.sum += this.n
        },
        decrement(){
            this.sum -= this.n
        },
        incrementOdd(){
            // 如果除2取余为0则不运算    也就是题目的 当前求和为奇数再加
            if(this.sum % 2){
                this.sum += this.n
            }
        },
        incrementWait(){
            setTimeout(() => {
                this.sum += this.n
            }, 500);
        },
    },
}
</script>

<style lang="css">
    button{
        margin-left: 5px
    }
</style>

