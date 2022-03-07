import React from 'react'
import { useSetlists } from '../../../providers/SetlistProvider'
import ScoreChartInput from '../../../../common/components/ScoreChartInput'

const ScorePointEdit = () => {
  const { tmpRecords, editingRecordId, rewriteTmpRecord } = useSetlists()

  return (
    <div>
      {editingRecordId != -1 && (
        <ScoreChartInput
          score={tmpRecords[editingRecordId].score}
          setScore={(value) => rewriteTmpRecord('score', value)}
        />
      )}
    </div>
  )
}

export default ScorePointEdit
