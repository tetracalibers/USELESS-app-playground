import React from 'react'
import { useSetlists } from '../../../providers/SetlistProvider'
import ScoreChartInput from '../../../../common/components/ScoreChartInput'

const ScorePointEdit = () => {
  const { getEditingRecordData, rewriteTmpRecord } = useSetlists()

  return (
    <div>
      <ScoreChartInput
        score={getEditingRecordData('score')}
        setScore={(value) => rewriteTmpRecord('score', value)}
      />
    </div>
  )
}

export default ScorePointEdit
