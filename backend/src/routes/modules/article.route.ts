import { Router } from 'express'
import wrapAsync from '@/middlewares/async.middleware'
import { addArticle, getArticle } from '@/controllers/article.controller'
import { authenticateWithJWT, isAuthenticated } from '@/middlewares/auth.middleware'

const router = Router()

router.post('/', ...addArticle.middlewares, wrapAsync(addArticle.actor))

router.get('/:id', isAuthenticated, wrapAsync(getArticle.actor))

export default {
  router,
  name: 'article'
}
