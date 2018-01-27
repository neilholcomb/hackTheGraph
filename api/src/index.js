import Koa from 'koa'
import Router from 'koa-router'
import commitScraper from './commitScraper'

const app = new Koa()
const router = new Router()

router.get('/', async ctx => {
  ctx.body = `Welcome to the hack the graph API`
})

router.get('/commits/:userId', async ctx => {
  ctx.body = await commitScraper(ctx.params.userId)
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
  console.log('Open http://localhost:3000')
})
