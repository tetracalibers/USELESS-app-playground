import { useState } from 'react'
import { useLaravelSanctum } from './useLaravelSanctum'
import { useNavigate, useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { myPath } from '../../routes/path'

export const useLaravelAccessGate = () => {
  const { api } = useLaravelSanctum()
  const params = useParams()
  const navigate = useNavigate()
  const [userInfo, setUserInfo] = useState(null)

  const authFetch = async () => {
    const userId = params
      ? params.userid
      : localStorage.getItem('tomixy_play_id')
    if (!userId) {
      return {
        status: false,
        message:
          'いつもと異なる端末やブラウザからのアクセスです。ログインし直してください。',
      }
    }
    return await api
      .post(`/api/auth/gate`, {
        json: {
          id: userId,
        },
      })
      .json()
  }

  const accessQuery = useQuery('user', authFetch, {
    enabled: false,
    retry: 0,
    onSuccess: (data) => {
      if (!data.status) {
        console.log(data.message)
        navigate(myPath.this.Auth, { state: { wantToGoBack: true } })
        return
      }
      const user = data.userInfo
      localStorage.setItem('tomixy_play_id', user.id)
      setUserInfo(user)
    },
    onError: (err) => {
      console.log(err)
      navigate(myPath.this.Auth, { state: { wantToGoBack: true } })
    },
  })

  return { userInfo, accessQuery }
}
