import React from 'react'
import { useSetlists } from '../../../providers/SetlistProvider'
import SingKeyPicker from '../SingKeyPicker'

const SingKeyEdit = () => {
  const { getEditingRecordData, rewriteTmpRecord } = useSetlists()

  return (
    <div>
      <SingKeyPicker
        primaryKey="edit"
        value={getEditingRecordData('singKey')}
        setValue={(value) => rewriteTmpRecord('singKey', value)}
      />
    </div>
  )
}

export default SingKeyEdit
