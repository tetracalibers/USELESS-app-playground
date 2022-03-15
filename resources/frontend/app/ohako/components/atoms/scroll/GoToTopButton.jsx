import React from 'react'
import { css } from '@emotion/css'
import classNames from 'classnames'
import { Button } from 'react-materialize'

const GoToLatestButton = () => {
  const goTop = () => {
    window.scroll({ top: 0, behavior: 'smooth' })
  }

  const css_wrap = css`
    .btn-floating {
      background-color: #fbb034;
      background-image: linear-gradient(315deg, #fbb034 0%, #ffdd00 74%);
      box-shadow: inset 14px 0px 5px -10px rgb(0 0 0 / 20%),
        inset 13px 0px 2px -10px rgb(0 0 0 / 20%),
        inset 0px -3px 5px 0px rgb(250 241 220 / 50%),
        inset 0px -20px 10px 1px rgb(255 255 255 / 30%),
        inset -20px 10px 5px -20px rgb(0 0 0 / 30%),
        inset -20px 15px 10px -20px rgb(0 0 0 / 20%),
        inset 0px 20px 30px -5px rgb(0 0 0 / 30%);
      & > span {
        display: block;
        text-align: center;
        font-style: italic;
        color: rgb(8 6 6 / 30%);
        text-shadow: 0 0 15px rgb(255 255 255 / 50%),
          0 0 10px rgb(255 255 255 / 50%);
        font-family: 'Rye';
      }
    }
  `

  return (
    <div className={css_wrap}>
      <Button
        floating
        icon={<span>Top</span>}
        node="button"
        onClick={() => goTop()}
      />
    </div>
  )
}

export default GoToLatestButton
