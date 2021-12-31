import jwt from 'jsonwebtoken'
import passport from 'passport'
import { Request, Response, NextFunction } from 'express'
import { NotAuthenticated } from '@/errors/auth.error'

export function isAuthenticated (req: Request, _res: Response, next: NextFunction) {
  if (req.isAuthenticated()) {
    return next()
  }

  return next(new NotAuthenticated())
}

export async function authenticateWithJWT (req: Request, res: Response, next: NextFunction) {
  passport.authenticate(
    'jwt',
    { session: true },
    async (error, user) => {
    if (error) {
      next(error)
    }

    if (user) {
      new Promise((resolve, reject) => req.login(user, (error) => {
        if (error) reject(error)
        resolve(true)
      }))
      req.user = user
    }

    next()
  })(req, res, next)
}
