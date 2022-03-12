import React, { createContext, useContext } from 'react'
import { useObjectState } from '../../common/hooks/useObjectState'
import { columnsObj as cl, visibleColumnValues } from '../schema/columns'

const AddTmpContext = createContext()
export const useAddTmp = () => useContext(AddTmpContext)

const AddTmpProvider = ({ children }) => {
  const [addTmp, setAddTmpItem, setAddTmpAll, resetAddTmp] = useObjectState({
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
        addTmp,
        setAddTmpItem,
        setAddTmpAll,
        resetAddTmp,
      }}
    >
      {children}
    </AddTmpContext.Provider>
  )
}

export default AddTmpProvider
