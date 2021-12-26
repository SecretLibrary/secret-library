import jwt from 'jsonwebtoken'
import { InvalidAccessToken } from '@/errors/auth.error'
import { fetchKakaoUser } from '@/helpers/kakao'
import { success } from '@/helpers/response'
import { jwtSecret } from '@/helpers/env'
import { UserModel } from '@/models/user.model'

async function findUser (profile) {
  // const
  // UserModel.findOne()
}

export async function authWithKakao (req, res) {
  const accessToken = req.body.accessToken ?? null

  if (accessToken === null) {
    throw new InvalidAccessToken()
  }

  const { id, kakao_account: kakaoAccount } = await fetchKakaoUser(accessToken)
  const profile = kakaoAccount.profile

  await success(res, { profile })
}

export async function authWithJWT (req, res) {
  const profile = jwt.verify(req.headers.authorization, jwtSecret)
}


export async function logout (req, res) {
  if (req.user) {
    req.logout()
  }
  await success(res, null)
}

export default {
  authWithKakao,
  authWithJWT,
  logout
}
