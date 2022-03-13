import { useEffect } from 'react'
import { useSortFlag } from '../providers/SortProvider'
import { useSetlists } from '../providers/SetlistProvider'
import compareAsc from 'date-fns/compareAsc'
import compareDesc from 'date-fns/compareDesc'

export const useSortExec = () => {
  const { allRecords, setAllRecords } = useSetlists()
  const { sortBy, isDesc, customSortOn, restoreDefaultSortOrder } =
    useSortFlag()

  const sortExec = () => {
    let clone = Array.from(allRecords)
    if (sortBy == 'singDate') {
      clone
        .sort((current, next) =>
          compareAsc(current['registDate'], next['registDate'])
        )
        .sort((current, next) => {
          if (isDesc) {
            return compareDesc(current['singDate'], next['singDate'])
          } else {
            return compareAsc(current['singDate'], next['singDate'])
          }
        })
    } else {
      clone.sort((current, next) => {
        // WARNING 意味的にはisAscが正確（変えるの面倒臭いので放置）
        if (isDesc) {
          return current[sortBy] < next[sortBy] ? 1 : -1
        } else {
          return current[sortBy] > next[sortBy] ? 1 : -1
        }
      })
    }
    setAllRecords(clone)
  }

  useEffect(() => {
    sortExec()
  }, [sortBy, isDesc, allRecords.length, customSortOn])

  useEffect(() => {
    if (!customSortOn) restoreDefaultSortOrder()
  }, [customSortOn])
}
