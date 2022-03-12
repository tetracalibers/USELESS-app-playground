import React, { createContext, useContext } from 'react'
import { useObjectState } from '../../common/hooks/useObjectState'

const AddTmpContext = createContext()
export const useAddTmp = () => useContext(AddTmpContext)

const AddTmpProvider = ({ children }) => {
  const [addTmpRecord, writeAddTmpData, setAddTmpRecord, resetAddTmpRecord] =
    useObjectState({
      singDate: '',
      artistId: -1,
      artistName: '',
      songName: '',
      jacketImage: '',
      singKey: 0,
      rating: 0,
      score: 0,
      memo: '',
      problems: [],
      problemsData: [],
    })

  return (
    <AddTmpContext.Provider
      value={{
        addTmpRecord,
        writeAddTmpData,
        setAddTmpRecord,
        resetAddTmpRecord,
      }}
    >
      {children}
    </AddTmpContext.Provider>
  )
}

export default AddTmpProvider
