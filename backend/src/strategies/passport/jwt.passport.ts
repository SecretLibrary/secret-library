import { ExtractJwt, Strategy } from 'passport-jwt'
import { Auth } from '@/types/auth.type'
import { UserModel } from '@/models/user.model'
import { Nullable } from '@/types/base.type'

const JWT_SECRET = process.env.JWT_SECRET || 'HELLO_WORLD'

if (!JWT_SECRET) {
  console.error('No JWT secret string. Set JWT_SECRET environment variable.')
  process.exit(1)
}

const JWTConfig = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWT_SECRET
}

const JwtStrategy = new Strategy(JWTConfig, async (jwtPayload, done) => {
  let user: Nullable<Auth.User> = null

  try {
    user = await UserModel.findOne({ userId: jwtPayload.userId })
  } catch (e) {
    return done(null, null, { message: '올바르지 않은 인증정보입니다.' })
  }

  return done(null, user)
})

export default JwtStrategy
