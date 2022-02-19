import { body, param, validationResult } from 'express-validator'
import { Controller } from '@/types/controller.type'
import { isAuthenticated } from '@/middlewares/auth.middleware'
import { Auth } from '@/types/auth.type'
import { ReqParamsNotMatchError } from '@/errors/req.error'

import articleService from '@/services/article.service'

import User = Auth.User

export const getArticle: Controller = {
  middlewares: [
    param('id').exists()
  ],
  async actor (req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      throw new ReqParamsNotMatchError(errors)
    }

    const params = req.params
    const articleId = params.id

    return await articleService.getArticle(articleId)
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
