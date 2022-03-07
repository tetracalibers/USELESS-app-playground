import { useState } from 'react'

export const useTableSort = ({ allRecords, setAllRecords }) => {
  const [sortBy, setSortBy] = useState('')
  const [isDesc, setIsDesc] = useState(false)

  const sortHandler = (clickColumn) => {
    const isDoubleClick = sortBy === clickColumn
    const desc = isDoubleClick && !isDesc
    let clone = Array.from(allRecords)
    clone.sort((current, next) => {
      if (desc) {
        return current[clickColumn] < next[clickColumn] ? 1 : -1
      } else {
        return current[clickColumn] > next[clickColumn] ? 1 : -1
      }
    })
    setAllRecords(clone)
    setSortBy(clickColumn)
    setIsDesc(desc)
  }

  return {
    sortBy,
    setSortBy,
    isDesc,
    sortHandler,
  }
}
