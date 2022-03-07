import React from 'react'
import { useSetlists } from '../../../providers/SetlistProvider'
import SingKeyPicker from '../SingKeyPicker'

const SingKeyInput = ({ rowId }) => {
  const { singKey, setKey } = useSetlists()

  return (
    <div>
      <SingKeyPicker
        primaryKey={rowId}
        value={singKey}
        onClick={(value) => setKey(value)}
      />
    </div>
  )
}

export default SingKeyInput
