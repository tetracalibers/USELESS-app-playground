import React from 'react'
import { useSetlists } from '../../../providers/SetlistProvider'
import DatePicker from '../../../../common/components/DatePicker'

const SingDateEdit = () => {
  const { tmpRecords, editingRecordId, rewriteTmpRecord } = useSetlists()

  return (
    <div>
      {editingRecordId != -1 && (
        <DatePicker
          selected={tmpRecords[editingRecordId].singDate}
          onChange={(date) => rewriteTmpRecord('singDate', date)}
        />
      )}
    </div>
  )
}

export default SingDateEdit
