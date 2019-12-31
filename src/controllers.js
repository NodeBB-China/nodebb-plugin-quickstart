'use strict'
// 系统函数库
// const user = require.main.require('./user')
// const db = require.main.require('../src/database')
// const meta = require.main.require('./meta')
// const utils = require.main.require('../public/src/utils')

// 常用模块
// const async = require.main.require('async')
// const nconf = require.main.require('nconf')
// const winston = require.main.require('winston')
// const path = require.main.require('path')

// 载入依赖模块
// const _ = require('lodash')
// const callbackify = require('../callbackify')

class Controllers {
  async renderAdminPage (req, res, next) {
    /*
      请确保你的路由地址能和模板路径能够对应。
      例如， 如果你的站点地址为:
        myforum.com/some/complex/route/
      你的模板地址应该为:
        templates/some/complex/route.tpl
      并且你应该这样来渲染它:
        res.render('some/complex/route');
    */

    res.render('admin/plugins/quickstart', {})
    /*
      使用回调方式中的 next(err, data) 方法。
      传递数据:
        return '数据'
      传递错误:
        throw new Error('错误')
    */
  }
}

module.exports = Controllers
