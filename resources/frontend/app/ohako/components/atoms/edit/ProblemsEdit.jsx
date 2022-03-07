import React, { useEffect, useState } from 'react'
import { useSetlists } from '../../../providers/SetlistProvider'
import ProblemSelector from '../ProblemSelector'

const ProblemsEdit = () => {
  const { tmpRecords, editingRecordId, rewriteTmpRecord } = useSetlists()

  return (
    <div>
      {editingRecordId != -1 && (
        <ProblemSelector
          value={tmpRecords[editingRecordId].problemsData}
          setValue={(info) => {
            rewriteTmpRecord('problemsData', info)
          }}
        />
      )}
    </div>
  )
}

export default ProblemsEdit
