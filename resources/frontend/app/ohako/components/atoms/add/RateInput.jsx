import React from 'react'
import { useSetlists } from '../../../providers/SetlistProvider'
import Rating from '../../../../common/components/Rating'

const RateInput = () => {
  const { singRate, setRate } = useSetlists()

  return (
    <div>
      <Rating value={singRate} onClick={(value) => setRate(value)} />
    </div>
  )
}

export default RateInput
