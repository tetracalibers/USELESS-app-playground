import React from 'react'
import { ImStarFull } from 'react-icons/im'
import { css } from '@emotion/css'

const RateStarsPrint = ({ rate, max = 5 }) => {
  const css_wrap = css`
    width: ${max}em;
    line-height: 1em;
    @media (max-width: 40em) {
      font-size: 1.25rem;
    }
  `
  const css_star_active = css`
    svg {
      fill: #ebf928;
      filter: drop-shadow(0px 0px 1px ivory);
      transform: translateZ(0);
    }
  `
  const css_star_inactive = css`
    svg {
      fill: #b8c6db80;
    }
  `

  return (
    <div className={css_wrap}>
      {[...Array(rate)].map((_, i) => (
        <span key={i} className={css_star_active}>
          <ImStarFull />
        </span>
      ))}
      {[...Array(max - rate)].map((_, i) => (
        <span key={rate + i + 1} className={css_star_inactive}>
          <ImStarFull />
        </span>
      ))}
    </div>
  )
}

export default RateStarsPrint
