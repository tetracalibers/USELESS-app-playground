import React from 'react'
import { useSort } from '../../../hooks/useSort'
import { visibles } from '../../../schema/columns'
import DropdownSelect from '../../../../common/components/DropdownSelect'

const SortColumnSelect = () => {
  const { setSortBy, sortBy } = useSort()

  return (
    <DropdownSelect
      optionsArray={visibles}
      optionValueKey="dataLabel"
      optionLabelKey="title"
      onChange={setSortBy}
      defaultValue={sortBy}
    />
  )
}

export default SortColumnSelect
