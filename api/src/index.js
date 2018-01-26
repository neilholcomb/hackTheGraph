import Koa from 'koa'
import Router from 'koa-router'

const PORT = 3001
const app = new Koa()
const router = new Router()

router.get('/', async ctx => {
  ctx.body = `Welcome to the hack the graph API`
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(PORT, () => {
  console.log(`Open http://localhost:${PORT}`)
})
