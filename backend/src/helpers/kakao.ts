import axios from 'axios'

export async function fetchKakaoUser (accessToken: string) {
  const { data } = await axios.get('https://kapi.kakao.com/v2/user/me', {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  })

  return data
}
