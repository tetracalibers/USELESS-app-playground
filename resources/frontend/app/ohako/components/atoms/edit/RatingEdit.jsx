import React from 'react'
import { useSetlists } from '../../../providers/SetlistProvider'
import Rating from '../../../../common/components/Rating'

const RatingEdit = () => {
  const { editingRecord, setEditingRecordData } = useSetlists()

  return (
    <div>
      <Rating
        value={editingRecord['rating']}
        onClick={(value) => setEditingRecordData('rating', value)}
      />
    </div>
  )
}

export default RatingEdit
