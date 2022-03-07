import React from 'react'
import { useEditDiff } from '../../../providers/EditDiffProvider'
import SingKeyPicker from '../SingKeyPicker'

const SingKeyEdit = () => {
  const { rewriteDiff, diff } = useEditDiff()

  return (
    <div>
      {diff.id != -1 && (
        <SingKeyPicker
          primaryKey="edit"
          value={diff.singKey}
          onClick={(value) => rewriteDiff('singKey', value)}
        />
      )}
    </div>
  )
}

export default SingKeyEdit
