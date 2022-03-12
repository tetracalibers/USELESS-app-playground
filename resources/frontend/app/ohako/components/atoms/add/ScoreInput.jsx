import React from 'react'
import { useAddTmp } from '../../../providers/AddTmpProvider'
import ScoreChartInput from '../../../../common/components/ScoreChartInput'

const ScoreInput = () => {
  const { addTmpRecord, writeAddTmpData } = useAddTmp()
  const { score } = addTmpRecord

  return (
    <div>
      <ScoreChartInput
        score={score}
        setScore={(value) => writeAddTmpData('score', value)}
      />
    </div>
  )
}

export default ScoreInput
