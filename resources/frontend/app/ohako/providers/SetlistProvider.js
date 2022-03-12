import React, { createContext, useState, useContext, useMemo } from 'react'
import { visibleColumnValues } from '../schema/columns'
import { useObjectState } from '../../common/hooks/useObjectState'

const SetlistContext = createContext()
export const useSetlists = () => useContext(SetlistContext)

const SetlistProvider = ({ children }) => {
  const [user, setUser] = useState({})
  const [allRecords, setAllRecords] = useState([])
  const [allProblems, setAllProblems] = useState([])
  const [initComplete, setInitComplete] = useState(true)

  const addRecord = (newRecord) => {
    setAllRecords([newRecord, ...allRecords])
  }

  const trashRecord = (recordId) => {
    setAllRecords(
      allRecords.filter((record) => {
        return record.id != recordId
      })
    )
  }

  const visibleColumnValuesInitEmpty = useMemo(() => {
    return visibleColumnValues('')
  }, [])

  const visibleColumnValuesInitFalse = useMemo(() => {
    return visibleColumnValues(false)
  }, [])

  const [filterConditions, setCondition] = useObjectState(
    visibleColumnValuesInitEmpty
  )

  return (
    <SetlistContext.Provider
      value={{
        user,
        setUser,
        allRecords,
        setAllRecords,
        addRecord,
        trashRecord,
        allProblems,
        setAllProblems,
        initComplete,
        setInitComplete,
        visibleColumnValuesInitEmpty,
        visibleColumnValuesInitFalse,
        filterConditions,
        setCondition,
      }}
    >
      {children}
    </SetlistContext.Provider>
  )
}

export default SetlistProvider
