import React from 'react'
import { useSetlists } from '../../../providers/SetlistProvider'
import DatePicker from '../../../../common/components/DatePicker'

const SingDateEdit = () => {
  const { getEditingRecordData, rewriteTmpRecord } = useSetlists()

  return (
    <div>
      <DatePicker
        selected={getEditingRecordData('singDate')}
        onChange={(date) => rewriteTmpRecord('singDate', date)}
      />
    </div>
  )
}

export default SingDateEdit
