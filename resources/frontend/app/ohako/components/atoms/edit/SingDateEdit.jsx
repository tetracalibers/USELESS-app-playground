import React from 'react'
import { useEditDiff } from '../../../providers/EditDiffProvider'
import DatePicker from '../../../../common/components/DatePicker'

const SingDateEdit = () => {
  const { rewriteDiff, diff } = useEditDiff()

  return (
    <div>
      {diff.id != -1 && (
        <DatePicker
          selected={diff.singDate}
          onChange={(date) => rewriteDiff('singDate', date)}
        />
      )}
    </div>
  )
}

export default SingDateEdit
