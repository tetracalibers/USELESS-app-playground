import React, { createContext, useContext } from 'react'
import { useObjectState } from '../../common/hooks/useObjectState'

const EditDiffContext = createContext()
export const useEditDiff = () => useContext(EditDiffContext)

const EditDiffProvider = ({ children }) => {
  const [diff, rewriteDiff, setDiff, resetDiff] = useObjectState({ id: -1 })

  return (
    <EditDiffContext.Provider
      value={{
        rewriteDiff,
        setDiff,
        resetDiff,
        diff,
      }}
    >
      {children}
    </EditDiffContext.Provider>
  )
}

export default EditDiffProvider
