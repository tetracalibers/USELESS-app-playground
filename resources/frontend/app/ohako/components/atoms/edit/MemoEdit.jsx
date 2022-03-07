import React from 'react'
import { useSetlists } from '../../../providers/SetlistProvider'
import FlexibleTextarea from '../../../../common/components/FlexibleTextarea'

const MemoEdit = () => {
  const { editingRecord, setEditingRecordData } = useSetlists()

  return (
    <div>
      <FlexibleTextarea 
        value={editingRecord['memo']}
        setValue={(value) => setEditingRecordData('memo', value)}
      />
    </div>
  )
}

export default MemoEdit
