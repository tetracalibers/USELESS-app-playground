import React from 'react'
import { useSetlists } from '../../../providers/SetlistProvider'
import Rating from '../../../../common/components/Rating'

const RatingEdit = () => {
  const { tmpRecords, editingRecordId, rewriteTmpRecord } = useSetlists()

  return (
    <div>
      {editingRecordId != -1 && (
        <Rating
          value={tmpRecords[editingRecordId].rating}
          onClick={(value) => rewriteTmpRecord('rating', value)}
        />
      )}
    </div>
  )
}

export default RatingEdit
