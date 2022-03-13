import React, { useEffect } from 'react'
import { useAddTmp } from '../../../providers/AddTmpProvider'
import ProblemSelector from '../ProblemSelector'

const ProblemInput = () => {
  const { addTmpRecord: tmp, writeAddTmpData } = useAddTmp()

  return (
    <div>
      <ProblemSelector
        value={tmp.problemsData}
        defaultValue=""
        setValue={(info) => {
          writeAddTmpData('problemsData', info)
        }}
      />
    </div>
  )
}

export default ProblemInput
