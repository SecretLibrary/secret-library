import { Schema } from 'mongoose'
import { Auth } from '@/types/auth.type'
import User = Auth.User

export const UserSchema = new Schema<User>({
  userId: {
    type: String,
    required: true
  },
  socialType: String,
  userName: String,
  email: String,
  completed: String,
  rules: Array,
  auth: String,
  profileImage: String
})
