import { useEffect } from 'react'
import { useSetlists } from '../providers/SetlistProvider'
import { useAddTmp } from '../providers/AddTmpProvider'

export const useLatest = () => {
  const { allRecords } = useSetlists()
  const { writeAddTmpData } = useAddTmp()

  useEffect(() => {
    if (allRecords.length > 0) {
      const latestRecord = allRecords[0]
      writeAddTmpData('singDate', latestRecord.singDate)
    }
  }, [allRecords.length])
}
