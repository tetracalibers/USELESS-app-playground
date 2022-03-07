import React, { useState, useEffect } from 'react'
import { TextInput } from 'react-materialize'
import { BsSearch } from 'react-icons/bs'
import { TiTimesOutline } from 'react-icons/ti'

const ResettableInput = ({
  value,
  onClear = () => {},
  onChange = () => {},
  placeholder = '',
  label = '',
  defaultIcon = <BsSearch />,
}) => {
  const [resettable, setResettable] = useState(false)

  const onClearDefault = () => {
    setResettable(false)
    onClear()
  }

  useEffect(() => {
    if (resettable && value.length === 0) setResettable(false)
    if (!resettable && value.length > 0) setResettable(true)
  }, [value])

  return (
    <TextInput
      icon={
        resettable ? (
          <TiTimesOutline onClick={(e) => onClearDefault()} />
        ) : (
          defaultIcon
        )
      }
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      label={label}
    />
  )
}

export default ResettableInput
