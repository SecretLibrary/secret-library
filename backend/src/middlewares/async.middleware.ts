import { Request, Response, NextFunction } from 'express'
import { success } from '@/helpers/response'

type AsyncFunction = (req: Request, res: Response, next: NextFunction) => Promise <any>

export default function wrapAsync (fn: AsyncFunction) {
  return function (req: Request, res: Response, next: NextFunction) {
    fn(req, res, next)
      .then(result => success(res, result))
      .catch(next)
  }
}
