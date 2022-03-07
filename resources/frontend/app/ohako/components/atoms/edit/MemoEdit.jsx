import React from 'react'
import { useSetlists } from '../../../providers/SetlistProvider'
import FlexibleTextarea from '../../../../common/components/FlexibleTextarea'

const MemoEdit = () => {
  const { getEditingRecordData, rewriteTmpRecord } = useSetlists()

  return (
    <div>
      <FlexibleTextarea
        value={getEditingRecordData('memo')}
        setValue={(value) => rewriteTmpRecord('memo', value)}
      />
    </div>
  )
}

export default MemoEdit
