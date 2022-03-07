import { useEffect } from 'react'
import { useSetlists } from '../providers/SetlistProvider'
import { useBackup } from './useBackup'
import format from 'date-fns/format'

export const useFilterSearch = () => {
  const { setAllRecords, filterConditions, setCondition } = useSetlists()
  const { backupData } = useBackup()

  const onStartFiltering = (keyword, targetColumn) => {
    setCondition(targetColumn, keyword)
  }

  const onResetCondition = (targetColumn) => {
    onStartFiltering('', targetColumn)
  }

  const clearFiltering = () => {
    setAllRecords(backupData)
  }

  useEffect(() => {
    let filtered = []
    filtered = backupData.filter((obj) => {
      let results = []
      Object.keys(filterConditions).map((dataLabel, i) => {
        let targetData = obj[dataLabel]
        let searchKey = filterConditions[dataLabel]
        switch (dataLabel) {
          case 'singKey':
            searchKey = !searchKey ? [-7, 7] : searchKey
            break
          case 'rating':
            searchKey = !searchKey ? [0, 5] : searchKey
            break
          case 'score':
            searchKey = !searchKey ? [0, 100] : searchKey
            break
          case 'singDate':
            targetData = format(obj[dataLabel], 'yyyy/MM/dd')
            break
          default:
            targetData =
              typeof obj[dataLabel] === 'string'
                ? obj[dataLabel].toLowerCase()
                : obj[dataLabel].toString()
            searchKey = searchKey.toLowerCase()
        }
        switch (dataLabel) {
          case 'singKey':
          case 'rating':
          case 'score':
            results.push(
              searchKey[0] <= targetData && targetData <= searchKey[1]
            )
            break
          default:
            results.push(targetData.indexOf(searchKey) > -1)
        }
      })
      return results.every((result) => result === true)
    })
    setAllRecords(filtered)
  }, [filterConditions])

  return {
    filterConditions,
    onStartFiltering,
    onResetCondition,
    clearFiltering,
  }
}
