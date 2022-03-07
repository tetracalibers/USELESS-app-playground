import React from 'react'
import { useSetlists } from '../../../providers/SetlistProvider'
import SingKeyPicker from '../SingKeyPicker'

const SingKeyEdit = () => {
  const { editingRecord, setEditingRecordData } = useSetlists()

  return (
    <div>
      <SingKeyPicker
        primaryKey="edit"
        value={editingRecord['singKey']}
        setValue={(value) => setEditingRecordData('singKey', value)}
      />
    </div>
  )
}

export default SingKeyEdit
