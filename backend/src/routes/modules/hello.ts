import { Router } from 'express'
import { success } from '@/helpers/response'
import wrapAsync from '@/middlewares/async.middleware'
import { Hello } from '@/models/hello'

const router = Router()

router.get('/', wrapAsync(
  async (req, res) => {
    const hello = await Hello.find()

    success(res, { hello })
  })
)

export default {
  router,
  name: 'hello'
}
