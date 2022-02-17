import { body, param, validationResult } from 'express-validator'
import { Controller } from '@/types/controller.type'
import { isAuthenticated } from '@/middlewares/auth.middleware'
import articleService from '@/services/article.service'
import { Auth } from '@/types/auth.type'
import User = Auth.User
import { ReqParamsNotMatchError } from '@/errors/req.error'

export const getArticle: Controller = {
  middlewares: [
    isAuthenticated,
    param('id').exists()
  ],
  async actor (req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      throw new ReqParamsNotMatchError(errors)
    }

    const user = req.user
    const params = req.params

    return user
  }
}

export const getArticleList: Controller = {
  middlewares: [
  ],
  async actor (req, res) {
    return await articleService.getArticleList()
  }
}

export const addArticle: Controller = {
  middlewares: [
    isAuthenticated,
    body('imageUrlList').exists().isArray(),
    body('articleItems').exists().isArray(),
    body('articleItems.*.title').trim().isString(),
    body('articleItems.*.text').trim().isString(),
    body('articleItems.*.order').isNumeric(),
    body('bookInfo').exists()
  ],
  async actor (req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      throw new ReqParamsNotMatchError(errors)
    }

    const { imageUrlList, articleItems, bookInfo } = req.body
    const user = req.user as User

    return await articleService.addArticle(user, bookInfo, articleItems, imageUrlList)
  }
}

export default {
  getArticle,
  addArticle
}
