<template>
    <div class="row" > 
        <!-- 展示用户列表 users.length 不为零就展示用户  为零就不展示 -->
      <div v-show="info.users.length" class="card" v-for="user in info.users" :key="user.login" >
          <!-- 有展示更改属性的地方动态绑定 -->
        <a :href="user.html_url" target="_blank">
          <img :src="user.avatar_url" style='width: 100px'/>
        </a>
        <p class="card-text">{{user.login}}</p>
      </div>

      <!-- 展示欢迎词 -->
      <h1 v-show="info.isFirst">欢迎使用!</h1>
      <!-- 展示加载中 -->
      <h1 v-show="info.isLoading">加载中....</h1>
      <!-- 展示错误信息 -->
      <h1 v-show="info.errMsg">{{info.errMsg}}</h1> 
    </div>
</template>

<script>
export default {
    name:'List',
    data() {
        return {
            info:{
                isFirst:true,
                isLoading:false,
                errMsg:'',
                users:[],
            }
        }
    },
    mounted() {
        this.$bus.$on('updateListData',(dataObj)=>{
            // console.log('我是List组件，收到数据：',users);
            // 将 users 存到数组   {...this.info,...dataObj} 
            // {...this.info,...dataObj}  重名的属性以后面的属性为主覆盖 这样可以让 isFirst 不会直接消失
            this.info = {...this.info,...dataObj}

        })
    },
}
</script>

<style>

</style>