import { useState } from 'react'

export const useObjectState = (initialObj = {}) => {
  const [objectState, setObjectState] = useState(initialObj)

  const rewritedClone = (rewriteKey, newValue) => {
    let clone = { ...objectState }
    clone[rewriteKey] = newValue
    return clone
  }

  const rewriteObj = (rewriteKey, newValue) => {
    setObjectState(rewritedClone(rewriteKey, newValue))
  }

  const resetObjectState = () => setObjectState(initialObj)

  return [objectState, rewriteObj, setObjectState, resetObjectState]
}
