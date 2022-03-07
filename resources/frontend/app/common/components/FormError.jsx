import React from 'react'
import { RiErrorWarningFill } from 'react-icons/ri'
import { css } from '@emotion/css'
import classNames from 'classnames'

const ValidationError = ({ message = '必須', wrapClassName = '' }) => {
  const css_error = css`
    background-color: #fe7bb0;
    background-image: linear-gradient(315deg, #fe7bb0 0%, #ff748b 74%);
    background-clip: text;
    color: transparent;
    svg {
      fill: palevioletred;
    }
  `

  return (
    <div className={classNames(css_error, wrapClassName)}>
      <RiErrorWarningFill />
      <span>{message}</span>
    </div>
  )
}

export default ValidationError
