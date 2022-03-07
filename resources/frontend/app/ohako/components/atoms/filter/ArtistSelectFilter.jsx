import React, { useState, useEffect } from 'react'
import { useLog } from '../../../hooks/useLog'
import DropdownSelect from '../../../../common/components/DropdownSelect'
import { useFilterSearch } from '../../../hooks/useFilterSearch'

const ArtistSelectFilter = () => {
  const { artistLog } = useLog()
  const { onStartFiltering, onResetCondition, filterConditions } =
    useFilterSearch()
  const [selectedArtist, setSelectedArtist] = useState('')

  useEffect(() => {
    if (!selectedArtist) {
      onResetCondition('artistName')
      return
    }
    onStartFiltering(selectedArtist.value, 'artistName')
  }, [selectedArtist])

  return (
    <DropdownSelect
      optionsArray={artistLog}
      optionValueKey="artistName"
      optionLabelKey="artistName"
      onChange={setSelectedArtist}
      defaultValue={filterConditions['artistName']}
    />
  )
}

export default ArtistSelectFilter
