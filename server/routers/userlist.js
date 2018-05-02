/**
 * 管理员用户子路由
 */

const router = require('koa-router')()
const userlist = require('./../controllers/userlist')
const userlistdetail = require('./../controllers/userlist_detail')

const routers = router
.get('/', userlist.indexPage )
.get('/detail',userlistdetail.indexPage)

module.exports = routers;