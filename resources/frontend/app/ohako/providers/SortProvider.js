import React, { createContext, useContext, useState } from 'react'

const SortContext = createContext()
export const useSortFlag = () => useContext(SortContext)

const SortProvider = ({ children }) => {
  const [sortBy, setSortBy] = useState('')
  const [isDesc, setIsDesc] = useState(true)
  const toggleSortOrder = () => setIsDesc(!isDesc)

  return (
    <SortContext.Provider
      value={{
        sortBy,
        setSortBy,
        isDesc,
        toggleSortOrder,
      }}
    >
      {children}
    </SortContext.Provider>
  )
}

export default SortProvider
