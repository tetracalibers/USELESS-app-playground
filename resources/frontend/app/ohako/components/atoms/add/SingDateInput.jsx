import React from 'react'
import { useSetlists } from '../../../providers/SetlistProvider'
import DatePicker from '../../../../common/components/DatePicker'

const SingDateInput = () => {
  const { singDate, setDate } = useSetlists()

  return <DatePicker selected={singDate} onChange={(date) => setDate(date)} />
}

export default SingDateInput
