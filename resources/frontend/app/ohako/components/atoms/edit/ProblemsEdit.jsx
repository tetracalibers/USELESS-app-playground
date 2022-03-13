import React, { useEffect, useState } from 'react'
import { useEditDiff } from '../../../providers/EditDiffProvider'
import ProblemSelector from '../ProblemSelector'

const ProblemsEdit = () => {
  const { rewriteDiff, diff } = useEditDiff()

  return (
    <div>
      {diff.id != -1 && (
        <ProblemSelector
          defaultValue={diff.problemsData}
          setValue={(info) => {
            rewriteDiff('problemsData', info)
          }}
        />
      )}
    </div>
  )
}

export default ProblemsEdit
