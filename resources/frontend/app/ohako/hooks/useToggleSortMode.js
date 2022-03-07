import { useEffect, useState } from 'react'
import { useSetlists } from '../providers/SetlistProvider'
import { useBackup } from './useBackup'

export const useToggleSortMode = () => {
  const { setAllRecords } = useSetlists()
  const { backupData } = useBackup()
  const [customSortOn, setCustomSortOn] = useState(false)

  const sortModeToggle = () => setCustomSortOn(!customSortOn)
  const restoreDefaultSortOrder = () => setAllRecords(backupData)

  useEffect(() => {
    if (!customSortOn) restoreDefaultSortOrder()
  }, [customSortOn])

  return {
    customSortOn,
    sortModeToggle,
  }
}
