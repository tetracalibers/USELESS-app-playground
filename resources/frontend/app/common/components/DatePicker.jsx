import React from 'react'
import DatePicker from 'react-datepicker'

const MyDatePicker = ({ selected, onChange }) => {
  return (
    <DatePicker
      selected={selected}
      onChange={onChange}
      dateFormat="yyyy/MM/dd"
    />
  )
}

export default MyDatePicker
