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
const router = new VueRouter({
    routes:[
        {
            // name 命名路由的名字   path 是路由文件地址   component 是路由组件
            name:'about',
            path:'/about',
            component:About,
            meta:{title:'关于'}
        },
        {
            name:'zhuye',
            path:'/home',
            component:Home,
            meta:{title:'主页'},
            // 子路由嵌套路由
            children:[
                {
                    name:'xinwen',
                    path:'news',
                    component:News,
                    // meta 路由元信息   用于放一些特殊的配置信息
                    meta:{isAuth:true,title:'新闻'},
                    // 独享路由守卫  只有前置(before)没有后置(after) 并且前置路由守卫可以跟全局后置守卫配合
                    // beforeEnter: (to, from, next) => {
                    //     if(to.meta.isAuth){  //判断是否需要鉴权
                    //         if(localStorage.getItem('school')==='atguigu'){
                    //             next()
                    //         }else{
                    //             alert('学校名错误，无权查看，在应用程序的本地存储里面修改key')
                    //         }
                    //     }else{
                    //         next()
                    //     }
                    // },
                },
                {
                    name:'xiaoxi',
                    path:'message',
                    component:Message,
                    meta:{isAuth:true,title:'消息'},
                    // 子路由再嵌套
                    children:[
                        {
                            name:'xiangqing',
                            // /:id/:title   站位符设置detail的后面两个参数是传id和title
                            path:'detail/:id/:title',
                            component:Detail,
                            meta:{isAuth:true,title:'详情'},
                            
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

// ### 路由守卫
// 1. 作用：对路由进行权限控制
// 2. 分类：全局守卫、独享守卫、组件内守卫

// 全局前置路由守卫  在每一次路由切换之前被调用
router.beforeEach((to, from, next) => {
    console.log('前置路由守卫',to,from);
    // 先判断路径是不是home下的 news 和message  然后判断school是不是atguigu  如果是的话再放行
    // 而其他路径情况则直接放行

    // if(to.path === '/home/news' || to.path === '/home/message'){
    if(to.meta.isAuth){  //判断是否需要鉴权
        if(localStorage.getItem('school')==='atguigu'){
            // 判断key一样之后菜变化网页title  否则title还是用原来的
            // document.title = to.meta.title  || '硅谷系统'
            next()
        }else{
            alert('学校名错误，无权查看，在应用程序的本地存储里面修改key')
        }
    }else{
        // 更改左上角网页标题   根据当前浏览的组件title显示   如果没有设置title则默认显示硅谷系统
        // 最好在public的index文件里面设置默认title  否则会有个抖动的效果
        // document.title = to.meta.title  || '硅谷系统'
        next()
    }
})

// 全局后置路由守卫  在每一次路由切换之后被调用
router.afterEach((to, from) => {
    console.log('后置路由守卫',to,from);
    // 通过后置路由修改网页title  只需要一句
    document.title = to.meta.title  || '硅谷系统'
})





export default router
