import React from 'react'
import { useAddTmp } from '../../../providers/AddTmpProvider'
import FlexibleTextarea from '../../../../common/components/FlexibleTextarea'

const MemoInput = () => {
  const { addTmpRecord, writeAddTmpData } = useAddTmp()
  const { memo } = addTmpRecord

  return (
    <div>
      <FlexibleTextarea
        value={memo}
        setValue={(value) => writeAddTmpData('memo', value)}
      />
    </div>
  )
}

export default MemoInput
