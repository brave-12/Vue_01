<template>
  <div class="container">
    <Search/>
    <List/>
  </div>
</template>

<script>
// 因为 bootstrap 用到了其他路径的资源会报错  可以放到public文件夹下index去link导入
// import './assets/css/bootstrap'
import Search from './components/Search'
import List from './components/List'

export default {
  name: "App",
  components:{Search,List}
 
};
</script>

<style>
  .album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}

</style>
