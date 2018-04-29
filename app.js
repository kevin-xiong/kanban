const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const KanbanController = require('./src/controllers/kanban')

const sRouter =  new Router({ prefix: '/service' });
const api = sRouter.get('/',KanbanController.list)
app.use(api.routes())
app.listen(8080);