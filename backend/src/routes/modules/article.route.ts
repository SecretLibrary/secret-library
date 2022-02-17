import { Router } from 'express'
import { addArticle, getArticle, getArticleList } from '@/controllers/article.controller'
import wrapAsync from '@/middlewares/async.middleware'

const router = Router()

router.get('/', getArticleList.middlewares, wrapAsync(getArticleList.actor))
router.post('/', addArticle.middlewares, wrapAsync(addArticle.actor))
router.get('/:id', getArticle.middlewares, wrapAsync(getArticle.actor))

export default {
  router,
  name: 'article'
}
