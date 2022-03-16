import { useEffect } from 'react'
import { useQuery } from 'react-query'
import { useLaravelSanctum } from '../../common/hooks/useLaravelSanctum'
import { useUserOptions } from '../providers/UserOptionsProvider'
import { useSetlists } from '../providers/SetlistProvider'

export const useRegisteredSingDateInit = () => {
  const { setRegisteredSingDate } = useUserOptions()
  const { user } = useSetlists()
  const { api } = useLaravelSanctum()

  const initRegisteredSingDateFetch = async () => {
    return await api
      .post('/api/ohako/setlist/get/registered-option', {
        json: {
          userId: user.id,
          target: 'sing_date',
        },
      })
      .json()
  }

  const { refetch } = useQuery(
    'initRegisteredSingDate',
    initRegisteredSingDateFetch,
    {
      enabled: false,
      onSuccess: (data) => {
        if (!data.status) {
          console.log(data.message)
          return
        }
        setRegisteredSingDate(data.list)
      },
      onError: (err) => console.log(err),
    }
  )

  useEffect(() => {
    if (user) {
      refetch()
    }
  }, [user])
}
