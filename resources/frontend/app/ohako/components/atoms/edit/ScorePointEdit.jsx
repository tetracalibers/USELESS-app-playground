import React from 'react'
import { useSetlists } from '../../../providers/SetlistProvider'
import ScoreChartInput from '../../../../common/components/ScoreChartInput'

const ScorePointEdit = () => {
  const { editingRecord, setEditingRecordData } = useSetlists()

  return (
    <div>
      <ScoreChartInput
        score={editingRecord['score']}
        setScore={(value) => setEditingRecordData('score', value)}
      />
    </div>
  )
}

export default ScorePointEdit
