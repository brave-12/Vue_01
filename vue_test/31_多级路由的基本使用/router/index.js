// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
// 引入组件  将文件写在 pages 中   区分普通组件和页面组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'

// 创建并暴露一个路由器
// 两个路由之间切换的时候   另外一个路由不是隐藏了而是直接销毁了
// 一级路由加斜杠    如果是一级路由的子路由则不用加斜杠
export default new VueRouter({
    routes:[
        {
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home,
            // 子路由嵌套路由
            children:[
                {
                    path:'news',
                    component:News
                },
                {
                    path:'message',
                    component:Message
                },
            ]
        },
    ]
})
