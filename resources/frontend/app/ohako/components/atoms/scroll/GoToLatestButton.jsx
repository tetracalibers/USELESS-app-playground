import React from 'react'
import { css } from '@emotion/css'
import { useWindowSize } from '@react-hook/window-size'
import { Link as Scroll } from 'react-scroll'
import classNames from 'classnames'
import { Button } from 'react-materialize'

const GoToLatestButton = () => {
  const [width, height] = useWindowSize()

  const css_wrap = css`
    .btn-floating {
      background-color: #fc5296;
      background-image: linear-gradient(315deg, #fc5296 0%, #f67062 74%);
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
    <>
      <Scroll
        to="sing-history-latest-record"
        smooth={true}
        offset={width < 16 * 40 ? -100 : -1 * (30 + 14 * 1.5 + 100 + 1)}
      >
        <div className={css_wrap}>
          <Button floating icon={<span>New</span>} node="button" />
        </div>
      </Scroll>
    </>
  )
}

export default GoToLatestButton
