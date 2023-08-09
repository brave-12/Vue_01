<template>
  <input type="text" v-model="keyWord" />
  <h3>{{keyWord}}</h3>
</template>

<script>
import { ref, customRef } from "vue";
export default {
  name: "App",
  setup() {
    // 使用Vue提供的ref
    // let keyWord = ref('hello')

    // 使用程序员自定义的ref
    function myRef(value) {
      let timer
      // customRef 作用：创建一个自定义的 ref，并对其依赖项跟踪和更新触发进行显式控制
      return customRef((track,trigger) => {
        return {
          get() {
            // 执行两次是因为两个标签都读取了数据
            console.log(`有人从myRef读取数据了，我把${value}给他了`);
            track()  // 通知Vue追踪数据(value)的变化(提前和get商量一下，让她认为这个value是有用的)
            return value
          },
          set(newValue) {
            console.log(`有人把myRef容器中的数据改了:${newValue}`);
            // 防抖效果  防止输入过快的时候抖动现象的时候有多个定时器  所以清除定时器  
            clearTimeout(timer)
            // 延时0.5s再解析模板
            timer = setTimeout(() => {
              value = newValue
              trigger()  // 通知Vue重新解析模板
            }, 500);
          }
        };
      });
    }
    let keyWord = myRef("hello");

    return {
      keyWord
    };
  }
};
</script>


