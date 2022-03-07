import React from 'react'
import { useSetlists } from '../../../providers/SetlistProvider'
import ProblemSelector from '../ProblemSelector'

const ProblemInput = () => {
  const { setProblem, singProblem } = useSetlists()

  return (
    <div>
      <ProblemSelector value={singProblem} setValue={setProblem} />
    </div>
  )
}

export default ProblemInput
