import React from 'react'
import { useAddTmp } from '../../../providers/AddTmpProvider'
import DatePicker from '../../../../common/components/DatePicker'

const SingDateInput = () => {
  const { addTmpRecord, writeAddTmpData } = useAddTmp()
  const { singDate } = addTmpRecord

  return (
    <DatePicker
      selected={singDate}
      onChange={(date) => writeAddTmpData('singDate', date)}
    />
  )
}

export default SingDateInput
