import React from 'react'
import { useSetlists } from '../../../providers/SetlistProvider'
import DatePicker from '../../../../common/components/DatePicker'

const SingDateEdit = () => {
  const { editingRecord, setEditingRecordData } = useSetlists()

  return (
    <div>
      <DatePicker
        selected={editingRecord['singDate']}
        onChange={(date) => setEditingRecordData('singDate', date)}
      />
    </div>
  )
}

export default SingDateEdit
