<template>
  <!-- Search 区 -->
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="keyWord" />&nbsp;
      <button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
    name:'Search',
    data() {
        return {
            keyWord:''
        }
    },
    methods: {
        searchUsers(){
            // 请求前更新List的数据  四个参数各自对应的出现时机不同
            this.$bus.$emit('updateListData',{isLoading:true,errMsg:'',users:[],isFirst:false})
			axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
                response => {
                    // console.log('请求成功了',response.data.items);
                    // isFirst 只有第一次页面会展示  后续操作就不需要再显示了
                    this.$bus.$emit('updateListData',{isLoading:false,errMsg:'',users:response.data.items})
                },
                error => {
                    console.log('请求失败了',error.message);
                    // 失败之后用户数据清空  返回失败代码信息
                    this.$bus.$emit('updateListData',{isLoading:false,errMsg:'error.message',users:[]})
                },
            )
        }
    },
};
</script>

<style>
</style>