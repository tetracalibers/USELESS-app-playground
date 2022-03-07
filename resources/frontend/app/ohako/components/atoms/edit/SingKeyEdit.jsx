import React from 'react'
import { useSetlists } from '../../../providers/SetlistProvider'
import SingKeyPicker from '../SingKeyPicker'

const SingKeyEdit = () => {
  const { tmpRecords, editingRecordId, rewriteTmpRecord } = useSetlists()

  return (
    <div>
      {editingRecordId != -1 && (
        <SingKeyPicker
          primaryKey="edit"
          value={tmpRecords[editingRecordId].singKey}
          setValue={(value) => rewriteTmpRecord('singKey', value)}
        />
      )}
    </div>
  )
}

export default SingKeyEdit
