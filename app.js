// 入口文件
// 1--导包
const express = require("express");
// 引入路由
const router = require("./router");
// 2--配置
const app = express();
// 3--挂载router
app.use(router);
// 4--监听端口
app.listen(30000, () => {
    console.log("11111监听端口~~~~")
})
