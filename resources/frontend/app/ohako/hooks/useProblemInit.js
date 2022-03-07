import { useEffect } from 'react'
import { useSetlists } from '../providers/SetlistProvider'
import { useLaravelSanctum } from '../../common/hooks/useLaravelSanctum'
import { useQuery } from 'react-query'

export const useProblemInit = () => {
  const { setAllProblems } = useSetlists()
  const { api } = useLaravelSanctum()

  const initFetch = async () => {
    return await api.get('/api/ohako/problem/init').json()
  }

  const { refetch } = useQuery('getProblemList', initFetch, {
    enabled: false,
    onSuccess: (data) => {
      if (!data.status) {
        console.log(data.message)
        return
      }
      setAllProblems(data.problemList)
    },
    onError: (err) => console.log(err),
  })

  useEffect(() => {
    refetch()
  }, [])
}
