import articles from '@/routes/modules/articles'
import auth from '@/routes/modules/auth'
import hello from '@/routes/modules/hello'

import { Server } from '@/types/server.type'

const routes: Server.IRoute[] = [
  articles,
  auth,
  hello
]

export default routes
