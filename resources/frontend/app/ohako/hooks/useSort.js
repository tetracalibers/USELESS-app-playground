import { useState, useEffect } from 'react'
import { useSetlists } from '../providers/SetlistProvider'
import compareAsc from 'date-fns/compareAsc'
import compareDesc from 'date-fns/compareDesc'

export const useSort = () => {
  const { allRecords, setAllRecords } = useSetlists()
  const [sortBy, setSortBy] = useState('')
  const [isDesc, setIsDesc] = useState(true)

  const sortExec = () => {
    let clone = Array.from(allRecords)
    if (sortBy == 'singDate') {
      clone.sort((current, next) => {
        if (isDesc) {
          return compareDesc(current[sortBy], next[sortBy])
        } else {
          return compareAsc(current[sortBy], next[sortBy])
        }
      })
    } else {
      clone.sort((current, next) => {
        if (isDesc) {
          return current[sortBy] > next[sortBy] ? 1 : -1
        } else {
          return current[sortBy] < next[sortBy] ? 1 : -1
        }
      })
    }
    setAllRecords(clone)
  }

  useEffect(() => {
    if (sortBy.length > 0) sortExec()
  }, [sortBy, isDesc])

  const toggleSortOrder = () => setIsDesc(!isDesc)

  return {
    sortBy,
    setSortBy,
    toggleSortOrder,
    isDesc,
  }
}
