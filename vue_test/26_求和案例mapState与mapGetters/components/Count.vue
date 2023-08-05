<template>
  <div>
      <!-- 差值语法内不宜写的过长  因此在 computed 下面重新命名一下 -->
      <h1>当前求和为：{{sum}}</h1>
      <h3>当前求和放大10倍后为：{{bigSum}}</h3>
      <h3>我在{{school}}，学习{{subject}}</h3>
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
// mapState和getters 模板文件   帮助生成带有 state,getters 指向的代码
import {mapState,mapGetters} from 'vuex'

export default {
    name:"Count",
    computed:{
        // 靠程序员自己亲自去写计算属性
        // sum(){
        //     return this.$store.state.sum
        // },
        // school(){
        //     return this.$store.state.school
        // },
        // subject(){
        //     return this.$store.state.subject
        // },

        // 下面这句话就相当于实现上面这几句话总和  就是网页vue插件显示 vuex bindings 而不是 computed 本质上还是它
        // ...mapState 就是让后面数组里面的每个元素展开  借助mapState生成计算属性   从state中读取数据（对象写法）
        // ...mapState({sum:'sum',school:'school',subject:'subject'}),

        // 借助mapState生成计算属性  从state中读取数据 (数组写法)  只有在生成的计算名和读取的名字是同名可以用
        ...mapState(['sum','school','subject']),

        // ...mapGetters  的用法与 ...mapState 相同
        ...mapGetters(['bigSum']),
        // bigSum(){
        //     return this.$store.getters.bigSum
        // },
    },
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
        // const x = mapState({he:'sum',xuexiao:'school',xueke:'subject'})
        // console.log(x);
    },
}
</script>

<style lang="css">
    button{
        margin-left: 5px
    }
</style>

