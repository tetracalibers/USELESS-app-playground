import { useState, useEffect } from 'react'
import { useSetlists } from '../providers/SetlistProvider'

export const useSort = () => {
  const { allRecords, setAllRecords } = useSetlists()
  const [sortBy, setSortBy] = useState('')
  const [isDesc, setIsDesc] = useState(true)

  const sortExec = () => {
    let clone = Array.from(allRecords)
    clone.sort((current, next) => {
      if (isDesc) {
        return current[sortBy] > next[sortBy] ? 1 : -1
      } else {
        return current[sortBy] < next[sortBy] ? 1 : -1
      }
    })
    setAllRecords(clone)
  }

  useEffect(() => {
    sortExec()
  }, [sortBy, isDesc])

  const toggleSortOrder = () => setIsDesc(!isDesc)

  return {
    sortBy,
    setSortBy,
    toggleSortOrder,
    isDesc,
  }
}
