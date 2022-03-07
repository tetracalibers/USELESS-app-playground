import React from 'react'
import { css } from '@emotion/css'
import { Textarea } from 'react-materialize'

const FlexibleTextarea = ({ value, setValue }) => {
  const updateHandler = (e) => {
    setValue(e.target.value)
  }

  const css_wrap = css`
    .input-field {
      margin-top: 0;
    }
    textarea.materialize-textarea {
      background-color: rgba(255, 255, 255, 0.3);
      border-radius: 30px;
      padding: 1rem 2rem 6rem;
      font-family: TsukushiBMaruGothic;
    }
    textarea.materialize-textarea:focus:not([readonly]) {
      border-bottom: none;
      box-shadow: none;
    }
  `

  return (
    <div className={css_wrap}>
      <Textarea value={value} onChange={(e) => updateHandler(e)} />
    </div>
  )
}

export default FlexibleTextarea
