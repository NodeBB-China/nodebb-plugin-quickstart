'use strict'

// 系统函数库
// const user = module.parent.parent.require('./user')
// const db = module.parent.parent.require('../src/database')
// const meta = module.parent.parent.require('./meta')
// const utils = module.parent.parent.require('../public/src/utils')

// 常用模块
// const async = module.parent.parent.require('async')
// const nconf = module.parent.parent.require('nconf')
// const winston = module.parent.parent.require('winston')
// const path = module.parent.parent.require('path')

const Controllers = require('./controllers')
const controllers = new Controllers()

class Core {
  async init (params) {
    const router = params.router
    const hostMiddleware = params.middleware
    // const hostControllers = params.controllers;
    // 我们需要为每个视图创建路由。 一个 API 路由，以及它自身的路由。 方法可以参考下面的方案
    // 使用 buildHeader 中间件， NodeBB会构建页面，并将你的模板嵌入进去
    router.get(
      '/admin/plugins/quickstart',
      hostMiddleware.admin.buildHeader,
      controllers.renderAdminPage
    )
    router.get('/api/admin/plugins/quickstart', controllers.renderAdminPage)
  }

  async addAdminNavigation (header) {
    header.plugins.push({
      route: '/plugins/quickstart',
      icon: 'fa-tint',
      name: '快速开始'
    })
    return header
  }
}
module.exports = Core
