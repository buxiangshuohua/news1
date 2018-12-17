// 路由文件

// 导包
const express = require("express");
// 导入列表页面
const user = require("./user/user");
// 实例化
const router = express.Router();

// 配置路由
router.get('/',user.showSignin);

// 暴露给外部
module.exports = router;