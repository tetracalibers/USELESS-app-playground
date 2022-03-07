import React from 'react'
import { useSetlists } from '../../../providers/SetlistProvider'
import ScoreChartInput from '../../../../common/components/ScoreChartInput'

const ScoreInput = () => {
  const { singScore, setScore } = useSetlists()

  return (
    <div>
      <ScoreChartInput score={singScore} setScore={setScore} />
    </div>
  )
}

export default ScoreInput
