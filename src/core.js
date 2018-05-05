
const Controllers = require('./controllers')
const controllers = new Controllers().load()

class Core {
  async func (a) {
    return 'hello'
  }
  async addAdminNavigation (params) {
    const router = params.router
    const hostMiddleware = params.middleware
    // const hostControllers = params.controllers
    router.get('/admin/plugins/quickstart', hostMiddleware.admin.buildHeader, controllers.renderAdminPage)
    router.get('/api/admin/plugins/quickstart', controllers.renderAdminPage)
  }
}

module.exports = Core
