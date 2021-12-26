import { Router } from 'express'

import wrapAsync from '@/middlewares/async.middleware'
import authController, { authWithKakao } from '@/controller/auth.controller'

const router = Router()

router.post('/kakao', wrapAsync(authController.authWithKakao))
router.post('/jwt', wrapAsync(authController.authWithJWT))
router.post('/logout', wrapAsync(authController.logout))

export default {
  name: 'auth',
  router
}
