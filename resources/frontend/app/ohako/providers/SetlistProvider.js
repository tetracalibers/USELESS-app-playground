import React, { createContext, useState, useContext, useMemo } from 'react'
import { columnsObj as cl, visibleColumnValues } from '../schema/columns'
import { useObjectState } from '../../common/hooks/useObjectState'

const SetlistContext = createContext()
export const useSetlists = () => useContext(SetlistContext)

const SetlistProvider = ({ children }) => {
  const [user, setUser] = useState({})
  const [singDate, setDate] = useState(cl['singDate'].initial)
  const [singArtistName, setArtistName] = useState(cl['artistName'].initial)
  const [singArtistId, setArtistId] = useState(cl['artistId'].initial)
  const [singSongName, setSongName] = useState(cl['songName'].initial)
  const [singJacketImage, setJacketImage] = useState(cl['jacketImage'].initial)
  const [singKey, setKey] = useState(cl['singKey'].initial)
  const [singRate, setRate] = useState(cl['rating'].initial)
  const [singScore, setScore] = useState(cl['score'].initial)
  const [singProblem, setProblem] = useState(cl['problems'].initial)
  const [singMemo, setMemo] = useState(cl['memo'].initial)
  const [allRecords, setAllRecords] = useState([])
  const [allProblems, setAllProblems] = useState([])
  const [initComplete, setInitComplete] = useState(true)
  const [tmpRecords, setTmpRecords] = useState([])
  const [editingRecordId, setEditingRecordId] = useState(-1)

  const addRecord = (newRecord) => {
    setAllRecords([newRecord, ...allRecords])
  }

  const resetRecordBuilder = () => {
    setDate(cl['singDate'].initial)
    setArtistName(cl['artistName'].initial)
    setArtistId(cl['artistId'].initial)
    setSongName(cl['songName'].initial)
    setJacketImage(cl['jacketImage'].initial)
    setKey(cl['singKey'].initial)
    setRate(cl['rating'].initial)
    setScore(cl['score'].initial)
    setProblem(cl['problems'].initial)
    setMemo(cl['memo'].initial)
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
        singDate,
        setDate,
        singArtistName,
        setArtistName,
        singArtistId,
        setArtistId,
        singSongName,
        setSongName,
        singJacketImage,
        setJacketImage,
        singKey,
        setKey,
        singRate,
        setRate,
        singScore,
        setScore,
        singProblem,
        setProblem,
        singMemo,
        setMemo,
        allRecords,
        setAllRecords,
        addRecord,
        trashRecord,
        resetRecordBuilder,
        allProblems,
        setAllProblems,
        initComplete,
        setInitComplete,
        visibleColumnValuesInitEmpty,
        visibleColumnValuesInitFalse,
        filterConditions,
        setCondition,
        resetEditingRecord,
        tmpRecords,
        setTmpRecords,
        editingRecordId,
        setEditingRecordId,
      }}
    >
      {children}
    </SetlistContext.Provider>
  )
}

export default SetlistProvider
