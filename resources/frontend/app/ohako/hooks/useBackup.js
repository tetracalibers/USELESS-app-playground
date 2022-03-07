import { useMemo } from 'react'
import { useSetlists } from '../providers/SetlistProvider'

export const useBackup = () => {
  const { allRecords, initComplete } = useSetlists()

  const backupData = useMemo(() => {
    return Array.from(allRecords)
  }, [initComplete])

  return { backupData }
}
