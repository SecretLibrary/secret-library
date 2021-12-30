import { Router } from 'express'
import wrapAsync from '@/middlewares/async.middleware'
import { addArticle, getArticle } from '@/controllers/article.controller'

const router = Router()

router.post('/', addArticle.middlewares, wrapAsync(addArticle.actor))
router.get('/:id', addArticle.middlewares, wrapAsync(getArticle.actor))

export default {
  router,
  name: 'article'
}
