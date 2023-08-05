<template>
  <div>
      <h1>人员列表</h1>
      <h3 style="color:red">Person组件求和为:{{sum}}</h3>
      <input type="text" placeholder="请输入名字" v-model="name">
      <button @click="add">添加</button>
      <ul>
          <li v-for="p in personList" :key="p.id">{{p.name}}</li>
      </ul>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
    name:'Person',
    data() {
        return {
            name:''
        }
    },
    computed:{
        personList(){
            return this.$store.state.personList
        },
        sum(){
            return this.$store.state.sum
        }
        // 简写
        // ...mapState(['personList']),
    },
    methods: {
        add(){
            const personObj = {id:nanoid(),name:this.name}
            // console.log(personObj);
            this.$store.commit('ADD_PERSON',personObj)
            // 重置输入框
            this.name = ''
            
        }
    },
}
</script>

<style>

</style>