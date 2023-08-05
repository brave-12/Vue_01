// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
// 引入组件  将文件写在 pages 中   区分普通组件和页面组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

// 创建并暴露一个路由器
// 两个路由之间切换的时候   另外一个路由不是隐藏了而是直接销毁了
// 一级路由加斜杠    如果是一级路由的子路由则不用加斜杠
export default new VueRouter({
    routes:[
        {
            // name 命名路由的名字   path 是路由文件地址   component 是路由组件
            name:'about',
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
                    component:Message,
                    // 子路由再嵌套
                    children:[
                        {
                            name:'xiangqing',
                            // /:id/:title   站位符设置detail的后面两个参数是传id和title
                            path:'detail/:id/:title',
                            component:Detail,
                            
                            // props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给detail组件
                            // props:{a:1,b:'hello'}

                            // props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数
                            // 以props的形式传给 Detail组件
                            props:true,

                            // props的第二种写法，值为函数
                            // props($route){
                            //     return {id:$route.query.id,title:$route.query.title}
                            // },

                            // 解构赋值的写法 {}
                            // props({query:{id,title}}){
                            //     return {id,title}
                            // }


                        },
                    ]
                },
            ]
        },
    ]
})
