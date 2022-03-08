import React, { useState, useEffect } from 'react'
import { useFilterSearch } from '../../../hooks/useFilterSearch'
import { useSetlists } from '../../../providers/SetlistProvider'
import DropdownSelect from '../../../../common/components/DropdownSelect'

const ProblemSelectFilter = () => {
  const { allProblems } = useSetlists()
  const { onStartFiltering, onResetCondition, filterConditions } =
    useFilterSearch()
  const [selectedProblem, setSelectedProblem] = useState('')

  useEffect(() => {
    if (!selectedProblem) {
      onResetCondition('problems')
      return
    }
    onStartFiltering(selectedProblem.content, 'problems')
  }, [selectedProblem])

  return (
    <DropdownSelect
      optionsArray={allProblems}
      optionValueKey="content"
      optionLabelKey="content"
      onChange={setSelectedProblem}
      defaultValue={filterConditions['problems']}
    />
  )
}

export default ProblemSelectFilter
