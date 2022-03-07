import React, { useState, useEffect } from 'react'
import { useFilterSearch } from '../../../hooks/useFilterSearch'
import { useLog } from '../../../hooks/useLog'
import DropdownSelect from '../../../../common/components/DropdownSelect'

const SongSelectFilter = () => {
  const { songLog } = useLog()
  const { onStartFiltering, onResetCondition, filterConditions } =
    useFilterSearch()
  const [selectedSong, setSelectedSong] = useState('')

  useEffect(() => {
    if (!selectedSong) {
      onResetCondition('songName')
      return
    }
    onStartFiltering(selectedSong.value, 'songName')
  }, [selectedSong])

  return (
    <DropdownSelect
      optionsArray={songLog}
      optionValueKey="song"
      optionLabelKey="song"
      onChange={setSelectedSong}
      defaultValue={filterConditions['songName']}
    />
  )
}

export default SongSelectFilter
