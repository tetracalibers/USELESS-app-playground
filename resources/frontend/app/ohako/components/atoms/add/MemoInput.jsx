import React from 'react'
import { useSetlists } from '../../../providers/SetlistProvider'
import FlexibleTextarea from '../../../../common/components/FlexibleTextarea'

const MemoInput = () => {
  const { singMemo, setMemo } = useSetlists()

  return (
    <div>
      <FlexibleTextarea 
        value={singMemo}
        setValue={setMemo}
      />
    </div>
  )
}

export default MemoInput
