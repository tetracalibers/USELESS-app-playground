import React from 'react'
import { useAddTmp } from '../../../providers/AddTmpProvider'
import Rating from '../../../../common/components/Rating'

const RateInput = () => {
  const { addTmpRecord, writeAddTmpData } = useAddTmp()
  const { rating } = addTmpRecord

  return (
    <div>
      <Rating
        value={rating}
        onClick={(value) => writeAddTmpData('rating', value)}
      />
    </div>
  )
}

export default RateInput
