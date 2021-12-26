import { model } from 'mongoose'
import { UserSchema } from '@/schema/user.schema'
import { Auth } from '@/types/auth.type'
import User = Auth.User

export const UserModel = model<User>('User', UserSchema)
