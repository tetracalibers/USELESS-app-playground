import React from 'react'
import { useSortFlag } from '../../../providers/SortProvider'
import { visibles } from '../../../schema/columns'
import DropdownSelect from '../../../../common/components/DropdownSelect'

const SortColumnSelect = () => {
  const { setSortBy, sortBy } = useSortFlag()

  return (
    <DropdownSelect
      optionsArray={visibles}
      optionValueKey="dataLabel"
      optionLabelKey="title"
      onChange={(value) => {
        if (value) setSortBy(value.dataLabel)
      }}
      defaultValue={sortBy}
    />
  )
}

export default SortColumnSelect
