import React from 'react'
import { ImStarFull } from 'react-icons/im'
import { css } from '@emotion/css'

const RateStarsPrint = ({ rate }) => {
  const css_wrap = css`
    width: 5em;
    @media (max-width: 40em) {
      font-size: 1.25rem;
    }
    svg {
      fill: #ebf928;
      filter: drop-shadow(0px 0px 6px ivory);
      transform: translateZ(0);
    }
  `

  return (
    <div className={css_wrap}>
      {[...Array(rate)].map((_, i) => (
        <span key={i}>
          <ImStarFull />
        </span>
      ))}
    </div>
  )
}

export default RateStarsPrint
