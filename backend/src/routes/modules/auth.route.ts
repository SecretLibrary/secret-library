import { Router } from 'express'

import wrapAsync from '@/middlewares/async.middleware'
import authController from '@/controllers/auth.controller'
import { authenticateWithJWT } from '@/middlewares/auth.middleware'

const router = Router()

router.post('/kakao', wrapAsync(authController.authWithKakao))
router.post('/login', authenticateWithJWT, wrapAsync(authController.login))
router.get('/me', wrapAsync(authController.fetchMe))
router.post('/logout', wrapAsync(authController.logout))

export default {
  name: 'auth',
  router
}
