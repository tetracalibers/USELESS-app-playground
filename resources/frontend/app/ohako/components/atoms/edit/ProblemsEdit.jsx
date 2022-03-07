import React, { useEffect, useState } from 'react'
import { useSetlists } from '../../../providers/SetlistProvider'
import ProblemSelector from '../ProblemSelector'

const ProblemsEdit = () => {
  const { editingRecord, setEditingRecordData, allProblems } = useSetlists()

  return (
    <div>
      <ProblemSelector
        value={editingRecord['problems']}
        setValue={(info) => {
          console.log(info)
          setEditingRecordData('problems', info)
        }}
      />
    </div>
  )
}

export default ProblemsEdit
