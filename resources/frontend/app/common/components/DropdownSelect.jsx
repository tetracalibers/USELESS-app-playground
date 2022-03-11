import React, { useRef } from 'react'
import { css } from '@emotion/css'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
const animatedComponents = makeAnimated()

const DropdownSelect = ({
  optionsArray,
  optionValueKey,
  optionLabelKey,
  onChange,
  defaultValue,
  multiple = false,
}) => {
  const selectRef = useRef(null)

  const css_container = css`
    .react-select {
      &__control,
      &__value-container,
      &__input-container,
      &__option {
        height: ${multiple ? 'auto' : '2rem'};
        font-family: 'TsukushiBMaruGothic';
      }
      &__value-container {
        padding: ${multiple ? '2rem 1rem' : '2px 8px'};
      }
      &__option {
        line-height: 1.5rem;
        padding: 4px 12px;
        height: fit-content;
        &--is-focused {
          background-color: #d5fefd;
          background-image: linear-gradient(72deg, #d5fefd 0%, #fffcff 74%);
        }
        &--is-selected {
          background-color: #045de9;
          background-image: linear-gradient(315deg, #045de9 0%, #09c6f9 74%);
        }
      }
    }
  `

  const placeholder = Array.isArray(defaultValue)
    ? defaultValue.map((info) => info.content).join(', ')
    : defaultValue

  return (
    <Select
      ref={selectRef}
      components={animatedComponents}
      options={optionsArray}
      getOptionLabel={(options) => options[optionLabelKey]}
      getOptionValue={(options) => options[optionValueKey]}
      onChange={onChange}
      defaultValue={defaultValue}
      isMulti={multiple}
      isClearable={true}
      blurInputOnSelect={true}
      captureMenuScroll={false}
      closeMenuOnSelect={true}
      isSearchable={true}
      placeholder={placeholder}
      onFocus={() => {
        if (
          selectRef.current.getValue().length == 0 &&
          selectRef.current.props.placeholder == defaultValue
        ) {
          selectRef.current.clearValue()
        }
      }}
      className={css_container}
      classNamePrefix="react-select"
    />
  )
}

export default DropdownSelect
