// 该文件用于创建vuex中最核心的store

// 该文件用于创建Vuex中最核心的store
import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'

// 准备 actions  用于响应组件中的动作
// 业务逻辑比如 判断 或者 定时器 等都写在这
const actions = {
    // 由于加减都不需要其他的操作  因此在Count中直接将数据和需要的方法提交(commit)给  mutations

    // context 有部分store的方法    value 是传过来的值
    // jia(context,value) {
    //     // 将这个数据提交给 mutations   且 mutations 需要有对应放方法
    //     context.commit('JIA',value)
    // },
    // jian(context,value) {
    //     context.commit('JIAN',value)
    // },

    // 而这两个个操作有其他操作和判断条件   因此需要走这一步
    jiaOdd(context,value) {
        // 如果除2取余为0则不运算    也就是题目的 当前求和为奇数再加
        if(context.state.sum % 2){
            context.commit('JIA',value)
        }
    },
    jiaWait(context,value) {
        // 设置一个定时器
        setTimeout(() => {
        context.commit('JIA',value)
    }, 500);
    },
}

// 准备 mutations   用于操作数据(state)  内部方法可以写成大写方便区分是 mutations 或者 actions
const mutations = {
    JIA(state,value){
        // console.log('mutations中的JIA被调用了',state,value);
        state.sum += value
    },
    JIAN(state,value){
        // console.log('mutations中的JIA被调用了',state,value);
        state.sum -= value
    },
}

// 准备 state    用于存储数据
const state = {
    sum:0, // 当前的和
    school:'尚硅谷',
    subject:'前端'
}

// 准备 getters   用于将state中的数据进行加工
const getters = {
    bigSum(state){
        return state.sum*10
    }
}


// 因为在main中先后顺序的原因  所以使用Vuex要写在这里
Vue.use(Vuex)
// 创建并暴露(导出)  store  
export default new Vuex.Store({
    // 值和命名同名可以简写成一个  actions:actions  简写  actions
    actions,
    mutations,
    state,
    getters
})
