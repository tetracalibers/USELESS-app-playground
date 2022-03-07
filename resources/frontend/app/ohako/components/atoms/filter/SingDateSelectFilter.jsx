import React, { useState, useEffect, useRef } from 'react'
import { useLog } from '../../../hooks/useLog'
import DropdownSelect from '../../../../common/components/DropdownSelect'
import { useFilterSearch } from '../../../hooks/useFilterSearch'

const SingDateSelectFilter = () => {
  const { singDateLog } = useLog()
  const { onStartFiltering, onResetCondition, filterConditions } =
    useFilterSearch()
  const [selectedSingDate, setSelectedSingDate] = useState('')

  useEffect(() => {
    if (!selectedSingDate) {
      onResetCondition('singDate')
      return
    }
    onStartFiltering(selectedSingDate.value, 'singDate')
  }, [selectedSingDate])

  return (
    <DropdownSelect
      optionsArray={singDateLog}
      optionValueKey="string"
      optionLabelKey="string"
      onChange={setSelectedSingDate}
      defaultValue={filterConditions['singDate']}
      onClickPlaceholder={() => setSelectedSingDate('')}
    />
  )
}

export default SingDateSelectFilter
