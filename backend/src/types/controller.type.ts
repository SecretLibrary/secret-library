import { Request, Response, NextFunction } from 'express'

export interface Controller {
  middlewares?: ((req: Request, res: Response, next: NextFunction) => void)[],
  actor: (req: Request, res: Response) => Promise<unknown>
}
