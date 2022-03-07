import React, { useState, useEffect } from 'react'
import { ImStarFull } from 'react-icons/im'
import { css } from '@emotion/css'
import classNames from 'classnames'
import { useWindowSize } from '@react-hook/window-size'

const Rating = ({ value, onClick, max = 5 }) => {
  const [width, height] = useWindowSize()
  const [tmpRate, setTmpRate] = useState(value)

  useEffect(() => {
    setTmpRate(value)
  }, [value])

  const resetTmpHandler = () => {
    setTmpRate(value)
  }

  const changeColorHandler = (i) => {
    setTmpRate(i)
  }

  const css_wrap = css`
    padding-bottom: 1rem;
    text-align: center;
  `
  const css_star = css`
    font-size: ${width < height ? '7vw' : '7vh'};
    cursor: pointer;
    padding: 0.5rem;
    svg {
      fill: #b8c6db80;
      margin: 0 0.1rem;
    }
    &.active svg {
      fill: #ebf928;
      filter: drop-shadow(0px 0px 6px ivory);
    }
  `

  return (
    <div onMouseOut={(e) => resetTmpHandler()} className={css_wrap}>
      {[...Array(max)].map((_, i) => (
        <span
          key={i}
          onClick={(e) => onClick(i + 1)}
          onMouseOver={(e) => changeColorHandler(i + 1)}
          className={classNames(css_star, i < tmpRate ? 'active' : '')}
        >
          <ImStarFull />
        </span>
      ))}
    </div>
  )
}

export default Rating
