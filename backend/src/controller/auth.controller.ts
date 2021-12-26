import { InvalidAccessToken } from '@/errors/auth.error'
import { fetchKakaoUser } from '@/helpers/kakao'
import { success } from '@/helpers/response'

export async function kakao (req, res) {
  const accessToken = req.body.accessToken ?? null

  if (accessToken === null) {
    throw new InvalidAccessToken()
  }

  const { id, kakao_account: kakaoAccount } = await fetchKakaoUser(accessToken)
  const profile = kakaoAccount.profile

  await success(res, { profile })
}


export async function logout (req, res) {
  if (req.user) {
    req.logout()
  }
  await success(res, null)
}

export default {
  kakao,
  logout
}
