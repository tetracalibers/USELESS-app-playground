import React, { useEffect, useState } from 'react'
import { useSetlists } from '../../../providers/SetlistProvider'
import ProblemSelector from '../ProblemSelector'

const ProblemsEdit = () => {
  const { rewriteTmpRecord } = useSetlists()

  return (
    <div>
      <ProblemSelector
        value={tmpRecords['problems']}
        setValue={(info) => {
          rewriteTmpRecord('problems', info)
        }}
      />
    </div>
  )
}

export default ProblemsEdit
