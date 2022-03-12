import React from 'react'
import { useAddTmp } from '../../../providers/AddTmpProvider'
import ProblemSelector from '../ProblemSelector'

const ProblemInput = () => {
  const { addTmpRecord, writeAddTmpData } = useAddTmp()
  const { problemsData } = addTmpRecord

  return (
    <div>
      <ProblemSelector
        value={problemsData}
        setValue={(info) => {
          writeAddTmpData('problemsData', info)
        }}
      />
    </div>
  )
}

export default ProblemInput
