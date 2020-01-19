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

const { Controllers } = require('./controllers')

const Core = {}
Core.init = async (params) => {
  const router = params.router
  const hostMiddleware = params.middleware
  // const hostControllers = params.controllers;
  // 我们需要为每个视图创建路由。 一个 API 路由，以及它自身的路由。 方法可以参考下面的方案
  // 使用 buildHeader 中间件， NodeBB会构建页面，并将你的模板嵌入进去
  router.get(
    '/admin/plugins/quickstart',
    hostMiddleware.admin.buildHeader,
    Controllers.renderAdminPage
  )
  router.get('/api/admin/plugins/quickstart', Controllers.renderAdminPage)
}

Core.addAdminNavigation = async (header) => {
  header.plugins.push({
    route: '/plugins/quickstart',
    icon: 'fa-tint',
    name: '快速开始'
  })
  return header
}

module.exports = Core
module.exports.Core = Core
