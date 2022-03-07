import React from 'react'
import Toggle from 'react-toggle'
import { css } from '@emotion/css'

const ToggleButton = ({
  onIcon = null,
  offIcon = null,
  onLabel = '',
  offLabel = '',
  onChange,
  checked,
}) => {
  const css_wrap = css`
    display: block;
    text-align: right;
    .react-toggle {
      transform: skewX(-15deg) scale(1.5);
      padding-right: 1rem;
      &:hover:not(.react-toggle--disabled) .react-toggle-track {
        background-color: #4d4d4d;
      }
    }
    .react-toggle-track {
      border-radius: 0;
    }
    .react-toggle-thumb {
      border-radius: 0;
    }
    .react-toggle--checked .react-toggle-track {
      background-color: #045de9;
      background-image: linear-gradient(315deg, #045de9 0%, #09c6f9 74%);
    }
  `
  const css_label = css``

  return (
    <label className={css_wrap}>
      <span className={css_label}>{offLabel}</span>
      <Toggle
        checked={checked}
        icons={{
          checked: onIcon,
          unchecked: offIcon,
        }}
        onChange={onChange}
      />
      <span className={css_label}>{onLabel}</span>
    </label>
  )
}

export default ToggleButton
