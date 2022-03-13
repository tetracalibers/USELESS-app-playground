import { useEffect } from 'react'
import { useSortFlag } from '../providers/SortProvider'
import { useSetlists } from '../providers/SetlistProvider'
import compareAsc from 'date-fns/compareAsc'
import compareDesc from 'date-fns/compareDesc'

export const useSortExec = () => {
  const { allRecords, setAllRecords } = useSetlists()
  const { sortBy, isDesc } = useSortFlag()

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
}
