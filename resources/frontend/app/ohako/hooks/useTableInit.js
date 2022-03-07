import { useEffect } from 'react'
import { useSetlists } from '../providers/SetlistProvider'
import { useQuery } from 'react-query'
import { useLaravelSanctum } from '../../common/hooks/useLaravelSanctum'
import parseISO from 'date-fns/parseISO'

export const useTableInit = () => {
  const { allRecords, setAllRecords, user, setInitComplete, initComplete } =
    useSetlists()
  const { api } = useLaravelSanctum()

  const initSetlistFetch = async () => {
    return await api
      .post('/api/ohako/setlist/init', {
        json: {
          userId: user.id,
        },
      })
      .json()
  }

  const { refetch } = useQuery('getSetlist', initSetlistFetch, {
    enabled: false,
    onSuccess: (data) => {
      if (!data.status) {
        console.log(data.message)
        return
      }
      const list = data.setlist
      if (list.length > 0) {
        setInitComplete(false)
      }
      setAllRecords(
        list.map((obj, i) => {
          return {
            id: obj.id,
            singDate: parseISO(obj.sing_date),
            artistId: obj.artist_itunes_id,
            artistName: obj.artist_name,
            songName: obj.song_name,
            jacketImage: obj.jacket_image,
            singKey: obj.sing_key,
            rating: obj.rating,
            score: obj.score,
            memo: obj.memo,
            problems: obj.problems.map((problem) => problem.content),
            registDate: parseISO(obj.created_at),
          }
        })
      )
    },
    onError: (err) => console.log(err),
  })

  useEffect(() => {
    if (!initComplete) setInitComplete(true)
  }, [allRecords])

  useEffect(() => {
    if (user) refetch()
  }, [user])
}
