import article from '@/routes/modules/article.route'
import auth from '@/routes/modules/auth.route'

import { Server } from '@/types/server.type'

const routes: Server.IRoute[] = [
  article,
  auth
]

export default routes
