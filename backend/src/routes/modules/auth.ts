import { Router } from 'express'

import wrapAsync from '@/middlewares/async.middleware'
import authController from '@/controller/auth.controller'
import { authenticateWithJWT } from '@/middlewares/auth.middleware'

const router = Router()

router.post('/kakao', wrapAsync(authController.authWithKakao))
router.get('/me', authenticateWithJWT, wrapAsync(authController.fetchMe))
router.post('/logout', wrapAsync(authController.logout))

export default {
  name: 'auth',
  router
}
