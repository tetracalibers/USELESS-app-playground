import React from 'react'
import { useEditDiff } from '../../../providers/EditDiffProvider'
import Rating from '../../../../common/components/Rating'

const RatingEdit = () => {
  const { rewriteDiff, diff } = useEditDiff()

  return (
    <div>
      {diff.id != -1 && (
        <Rating
          value={diff.rating}
          onClick={(value) => rewriteDiff('rating', value)}
        />
      )}
    </div>
  )
}

export default RatingEdit
