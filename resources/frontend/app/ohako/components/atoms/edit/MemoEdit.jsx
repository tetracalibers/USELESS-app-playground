import React from 'react'
import { useSetlists } from '../../../providers/SetlistProvider'
import FlexibleTextarea from '../../../../common/components/FlexibleTextarea'

const MemoEdit = () => {
  const { tmpRecords, editingRecordId, rewriteTmpRecord } = useSetlists()

  return (
    <div>
      {editingRecordId != -1 && (
        <FlexibleTextarea
          value={tmpRecords[editingRecordId].memo}
          setValue={(value) => rewriteTmpRecord('memo', value)}
        />
      )}
    </div>
  )
}

export default MemoEdit
