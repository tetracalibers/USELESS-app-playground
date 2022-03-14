import React from 'react'
import { css } from '@emotion/css'
import classNames from 'classnames'
import Flat from '../../../common/components/icon/Flat'
import Sharp from '../../../common/components/icon/Sharp'

const SingKeyPrint = ({ value }) => {
  console.log(value < 0)
  const sharpColor = 'rgba(235,60,160,1)'
  const flatColor = 'rgba(67,138,251,1)'

  const css_wrap = css`
    width: 3rem;
  `
  const css_flat = css`
    color: ${flatColor};
    svg {
      fill: ${flatColor};
    }
  `
  const css_sharp = css`
    color: ${sharpColor};
    svg {
      fill: ${sharpColor};
    }
  `
  const css_symbol = css`
    svg {
      width: 1.25rem;
    }
  `
  const css_num = css`
    font-size: 1.25rem;
  `

  return (
    <div className={css_wrap}>
      <div className={value < 0 ? css_flat : css_sharp}>
        <span className={css_symbol}>{value < 0 ? <Flat /> : <Sharp />}</span>
        <span className={css_num}>{value}</span>
      </div>
    </div>
  )
}

export default SingKeyPrint
