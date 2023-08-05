const express = require('express')

const app = express()
app.use(express.static(__dirname+'/static'))

// npm i connect-history-api-fallback
// 如果路由是 history 需要安装 connect-history-api-fallback 并导入模块就能让点击页面之后刷新不报错
// var history = require('connect-history-api-fallback');

app.get('/person',(req,res)=>{
    res.send({
        name:'tom',
        age:18
    })
})

app.listen(5005,(err)=>{
    if(!err) console.log('服务器启动成功');
    
})


