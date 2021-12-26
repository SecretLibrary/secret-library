import { Router } from 'express'

import wrapAsync from '@/middlewares/async.middleware'
import authController from '@/controller/auth.controller'

const router = Router()

router.post('/kakao', wrapAsync(authController.kakao))
router.post('/logout', wrapAsync(authController.logout))

export default {
  name: 'auth',
  router
}
