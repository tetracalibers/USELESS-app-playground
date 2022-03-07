import React, { useState } from 'react'
import { ImEye, ImEyeBlocked } from 'react-icons/im'
import { css } from '@emotion/css'
import classNames from 'classnames'

const PasswordInput = ({
  wrapClassName = '',
  inputClassName = '',
  inputOption = {},
  name = '',
}) => {
  const [isReveal, setIsReveal] = useState(false)
  const togglePassword = (prevState) => setIsReveal(!prevState)

  const css_wrap = css`
    position: relative;
  `
  const css_eye = css`
    position: absolute;
  `

  return (
    <div className={classNames(css_wrap, wrapClassName)}>
      <input
        placeholder="Password"
        type={isReveal ? 'text' : 'password'}
        className={inputClassName}
        name={name}
        {...inputOption}
      />
      <span
        onClick={() => togglePassword(isReveal)}
        role="presentation"
        className={css_eye}
      >
        {isReveal ? <ImEye /> : <ImEyeBlocked />}
      </span>
    </div>
  )
}

export default PasswordInput
