import React from 'react'
import { css } from '@emotion/css'
import Flat from '../../../../common/components/icon/Flat'
import Sharp from '../../../../common/components/icon/Sharp'

const SingKeyPrint = ({ value }) => {
  const sharpColor = '#ff78c5'
  const flatColor = '#29539b'

  const css_wrap = css`
    width: 4.5rem;
    line-height: 1rem;
    @media (max-width: 40em) {
      width: 100%;
    }
  `
  const css_flat = css`
    color: ${flatColor};
    filter: drop-shadow(#4d5dfb 0px 0px 1px);
    text-align: center;
    @media (max-width: 40em) {
      text-align: left;
    }
    svg {
      fill: ${flatColor};
    }
  `
  const css_sharp = css`
    color: ${sharpColor};
    filter: drop-shadow(0px 0px 1px #ddbdfc80);
    text-align: center;
    @media (max-width: 40em) {
      text-align: left;
    }
    svg {
      fill: ${sharpColor};
    }
  `
  const css_symbol = css`
    svg {
      width: 1rem;
      @media (max-width: 40em) {
        width: 1.25rem;
      }
    }
  `

  return (
    <div className={css_wrap}>
      {value < 0 && (
        <div className={css_flat}>
          {[...Array(Math.abs(value))].map((_, i) => (
            <span className={css_symbol} key={'flat-' + i}>
              <Flat />
            </span>
          ))}
        </div>
      )}
      {value > 0 && (
        <div className={css_sharp}>
          {[...Array(Math.abs(value))].map((_, i) => (
            <span className={css_symbol} key={'sharp-' + i}>
              <Sharp />
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

export default SingKeyPrint
