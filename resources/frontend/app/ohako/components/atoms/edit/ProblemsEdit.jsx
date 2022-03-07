import React, { useEffect, useState } from 'react'
import { useSetlists } from '../../../providers/SetlistProvider'
import ProblemSelector from '../ProblemSelector'

const ProblemsEdit = () => {
  const { editingRecordId, tmpRecords, setTmpRecords } = useSetlists()

  return (
    <div>
      <ProblemSelector
        value={editingRecord['problems']}
        setValue={(info) => {
          setEditingRecordData('problems', info)
        }}
      />
    </div>
  )
}

export default ProblemsEdit
