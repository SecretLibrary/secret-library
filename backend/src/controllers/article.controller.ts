import { body, param } from 'express-validator'
import { Controller } from '@/types/controller.type'
import { isAuthenticated } from '@/middlewares/auth.middleware'

export const getArticle: Controller = {
  middlewares: [
    isAuthenticated,
    param('id').exists()
  ],
  async actor (req, res) {
    const user = req.user

    return user
  }
}

export const addArticle: Controller = {
  middlewares: [
    isAuthenticated,
    body('imageUrlList').exists().isArray(),
    body('articleItems').exists().isArray()
  ],
  async actor (req, res) {
    const { imageUrlList, articleItems } = req.body
    const user = req.user

    return user
  }
}

export default {
  getArticle,
  addArticle
}
