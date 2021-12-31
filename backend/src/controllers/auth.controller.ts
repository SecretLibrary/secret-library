import jwt from 'jsonwebtoken'
import { InvalidAccessToken } from '@/errors/auth.error'
import { fetchKakaoUser } from '@/helpers/kakao'
import { jwtSecret } from '@/helpers/env'
import { UserModel } from '@/models/user.model'
import { Nullable } from '@/types/base.type'
import { Kakao } from '@/types/kakao.type'
import { Auth } from '@/types/auth.type'
import { authenticateWithJWT } from '@/middlewares/auth.middleware'

async function findUserOrCreate (profile: Kakao.Profile) {
  let user: Nullable<Auth.User> = await UserModel.findOne({ userId: profile.userId })

  if (!user) {
    const userModel = new UserModel({
      userId: profile.userId,
      socialType: 'KAKAO',
      userName: profile.nickname,
      rules: [],
      completed: false,
      auth: 'USER',
      profileImage: profile.profile_image_url
    })

    await userModel.save()
    user = await UserModel.findOne({ userId: profile.userId })
  }

  return user
}

export async function authWithKakao (req, res) {
  const accessToken = req.body.accessToken ?? null

  if (accessToken === null) {
    throw new InvalidAccessToken()
  }

  const { id: userId, kakao_account: kakaoAccount } = await fetchKakaoUser(accessToken)
  const profile: Kakao.Profile = { userId, ...kakaoAccount.profile }

  await findUserOrCreate(profile)
  const token = jwt.sign({ userId }, jwtSecret)

  return token
}

export async function login (req, res) {
  return req.user
}

export async function fetchMe (req, res) {
  return req.user
}

export async function logout (req, res) {
  if (req.user) {
    req.logout()
  }
  return null
}

export default {
  authWithKakao,
  login,
  fetchMe,
  logout
}
