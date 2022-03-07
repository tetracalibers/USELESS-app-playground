import React from 'react'
import { useEditDiff } from '../../../providers/EditDiffProvider'
import FlexibleTextarea from '../../../../common/components/FlexibleTextarea'

const MemoEdit = () => {
  const { rewriteDiff, diff } = useEditDiff()

  return (
    <div>
      {diff.id != -1 && (
        <FlexibleTextarea
          value={diff.memo}
          setValue={(value) => rewriteDiff('memo', value)}
        />
      )}
    </div>
  )
}

export default MemoEdit
