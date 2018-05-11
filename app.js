const Koa = require('koa');
const app = new Koa();
const path = require('path')
const Router = require('koa-router');
const staticCache = require('koa-static-cache')
const KanbanController = require('./src/controllers/kanban')

const sRouter =  new Router({ prefix: '/service' });
const api = sRouter.get('/',KanbanController.list)
app.use(api.routes())
app.use(serve('/dist', './dist'))
app.use(serve('/', './'))
app.use(require('./middlewares/view').render(app))
app.listen(8080);

function serve (prefix, filePath) {
  return staticCache(path.resolve(__dirname, filePath), {
    prefix: prefix,
    gzip: true,
    dynamic: true,
    maxAge: 60 * 60 * 24 * 30
  })
}