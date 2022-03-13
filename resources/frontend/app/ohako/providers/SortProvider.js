import React, { createContext, useContext, useState } from 'react'
import { useSetlists } from './SetlistProvider'
import { useBackup } from '../hooks/useBackup'

const SortContext = createContext()
export const useSortFlag = () => useContext(SortContext)

const SortProvider = ({ children }) => {
  const { setAllRecords } = useSetlists()
  const { backupData } = useBackup()
  const [customSortOn, setCustomSortOn] = useState(false)
  const [sortBy, setSortBy] = useState('singDate')
  const [isDesc, setIsDesc] = useState(true)
  const toggleSortOrder = () => setIsDesc(!isDesc)
  const sortModeToggle = () => setCustomSortOn(!customSortOn)
  const restoreDefaultSortOrder = () => setAllRecords(backupData)

  return (
    <SortContext.Provider
      value={{
        sortBy,
        setSortBy,
        isDesc,
        toggleSortOrder,
        sortModeToggle,
        restoreDefaultSortOrder,
        customSortOn,
      }}
    >
      {children}
    </SortContext.Provider>
  )
}

export default SortProvider
