import { useEffect } from 'react'
import { useSetlists } from '../providers/SetlistProvider'

export const useLatest = () => {
  const { allRecords, setDate } = useSetlists()

  useEffect(() => {
    if (allRecords.length > 0) {
      const latestRecord = allRecords[0]
      setDate(latestRecord.singDate)
    }
  }, [allRecords.length])
}
