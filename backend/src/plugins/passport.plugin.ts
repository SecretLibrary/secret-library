import passport from 'passport'
import JwtStrategy from '@/strategies/passport/jwt.passport'
import { Auth } from '@/types/auth.type'

passport.use(JwtStrategy)

passport.serializeUser((user, done) => done(null, user))
passport.deserializeUser<Auth.User>((user, done) => done(null, user))
