import React, { useEffect, useState } from 'react'
import { useSetlists } from '../../../providers/SetlistProvider'
import ProblemSelector from '../ProblemSelector'

const ProblemsEdit = () => {
  const { getEditingRecordData, rewriteTmpRecord } = useSetlists()

  return (
    <div>
      <ProblemSelector
        value={getEditingRecordData('problemsData')}
        setValue={(info) => {
          rewriteTmpRecord('problemsData', info)
        }}
      />
    </div>
  )
}

export default ProblemsEdit
