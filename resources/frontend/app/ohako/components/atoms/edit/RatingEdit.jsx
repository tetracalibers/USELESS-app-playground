import React from 'react'
import { useSetlists } from '../../../providers/SetlistProvider'
import Rating from '../../../../common/components/Rating'

const RatingEdit = () => {
  const { getEditingRecordData, rewriteTmpRecord } = useSetlists()

  return (
    <div>
      <Rating
        value={getEditingRecordData('rating')}
        onClick={(value) => rewriteTmpRecord('rating', value)}
      />
    </div>
  )
}

export default RatingEdit
