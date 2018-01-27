import Koa from 'koa'
import Router from 'koa-router'
import cors from '@koa/cors'
import commitScraper from './commitScraper'

const app = new Koa()
const router = new Router()

app.use(cors())

router.get('/', async ctx => {
  ctx.body = `Welcome to the hack the graph API`
})

router.get('/commits/:userId', async ctx => {
  const response = await commitScraper(ctx.params.userId)

  if (!response) {
    ctx.status = 404
    ctx.body = {
      error: `${ctx.params.userId} Not found on GitHub`
    }
  }

  ctx.body = response
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(2000, () => {
  console.log('Open http://localhost:2000')
})
