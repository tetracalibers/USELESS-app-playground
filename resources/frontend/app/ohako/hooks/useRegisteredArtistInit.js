import { useEffect } from 'react'
import { useQuery } from 'react-query'
import { useLaravelSanctum } from '../../common/hooks/useLaravelSanctum'
import { useUserOptions } from '../providers/UserOptionsProvider'
import { useSetlists } from '../providers/SetlistProvider'

export const useRegisteredArtistInit = () => {
  const { setRegisteredArtist } = useUserOptions()
  const { user } = useSetlists()
  const { api } = useLaravelSanctum()

  const initRegisteredArtistFetch = async () => {
    return await api
      .post('/api/ohako/setlist/get/registered-option', {
        json: {
          userId: user.id,
          target: 'artist_name',
        },
      })
      .json()
  }

  const { refetch } = useQuery(
    'initRegisteredArtist',
    initRegisteredArtistFetch,
    {
      enabled: false,
      onSuccess: (data) => {
        if (!data.status) {
          console.log(data.message)
          return
        }
        setRegisteredArtist(data.list)
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
