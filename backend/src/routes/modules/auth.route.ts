import { Router } from 'express'
import { authenticateWithJWT } from '@/middlewares/auth.middleware'

import wrapAsync from '@/middlewares/async.middleware'
import authController from '@/controllers/auth.controller'

const router = Router()

router.post('/kakao', wrapAsync(authController.authWithKakao))
router.post('/login', authenticateWithJWT, wrapAsync(authController.login))
router.get('/me', wrapAsync(authController.fetchMe))
router.post('/logout', wrapAsync(authController.logout))

export default {
  name: 'auth',
  router
}
