import React from 'react'
import { useEditDiff } from '../../../providers/EditDiffProvider'
import ScoreChartInput from '../../../../common/components/ScoreChartInput'

const ScorePointEdit = () => {
  const { rewriteDiff, diff } = useEditDiff()

  return (
    <div>
      {diff.id != -1 && (
        <ScoreChartInput
          score={diff.score}
          setScore={(value) => rewriteDiff('score', value)}
        />
      )}
    </div>
  )
}

export default ScorePointEdit
