import React from 'react'
import { useAddTmp } from '../../../providers/AddTmpProvider'
import SingKeyPicker from '../SingKeyPicker'

const SingKeyInput = ({ rowId }) => {
  const { addTmpRecord, writeAddTmpData } = useAddTmp()
  const { singKey } = addTmpRecord

  return (
    <div>
      <SingKeyPicker
        primaryKey={rowId}
        value={singKey}
        onClick={(value) => writeAddTmpData('singKey', value)}
      />
    </div>
  )
}

export default SingKeyInput
