import { ExtractJwt, Strategy } from 'passport-jwt'
import { Auth } from '@/types/auth.type'
import { UserModel } from '@/models/user.model'
import { Nullable } from '@/types/base.type'
import { jwtSecret } from '@/helpers/env'
import { pick } from '@/helpers/object'

if (!jwtSecret) {
  console.error('No JWT secret string. Set JWT_SECRET environment variable.')
  process.exit(1)
}

const JWTConfig = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: jwtSecret
}

const JwtStrategy = new Strategy(JWTConfig, async (jwtPayload, done) => {
  let user: Nullable<Auth.User> = null

  try {
    user = await UserModel.findOne({ userId: jwtPayload.userId }, '-__v -_id')
  } catch (e) {
    return done(null, null, { message: '올바르지 않은 인증정보입니다.' })
  }

  return done(null, user)
})

export default JwtStrategy
