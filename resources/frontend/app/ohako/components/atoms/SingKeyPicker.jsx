import React from 'react'
import { css } from '@emotion/css'
import classNames from 'classnames'
import { useWindowSize } from '@react-hook/window-size'

const SingKeyPicker = ({ primaryKey, value, onClick }) => {
  const [width, height] = useWindowSize()
  const minusColors = [
    'rgba(4,93,233,1.0)',
    'rgba(13,105,250,1.0)',
    'rgba(40,122,251,1.0)',
    'rgba(67,138,251,1.0)',
    'rgba(93,155,252,1.0)',
    'rgba(120,172,252,1.0)',
    'rgba(147,188,253,1.0)',
  ]
  const plusColors = [
    'rgba(185,19,114,1.0)',
    'rgba(212,21,131,1.0)',
    'rgba(232,32,147,1.0)',
    'rgba(235,60,160,1.0)',
    'rgba(237,88,174,1.0)',
    'rgba(240,116,187,1.0)',
    'rgba(243,144,201,1.0)',
  ]

  const css_number_wrap = css``
  const css_number = css`
    border-radius: 50%;
    color: white !important;
    font-family: 'Emilys Candy', cursive;
    display: inline-block;
    text-align: center;
    cursor: pointer;
    width: 100%;
    aspect-ratio: 1/1;
    display: grid;
    justify-content: center;
    align-content: center;
    font-size: ${width < height ? '3vw' : '3vh'};
    line-height: 1;
  `
  const css_zero = css`
    background: linear-gradient(
      289deg,
      rgba(243, 144, 201, 1) 0%,
      rgba(147, 188, 253, 1) 100%
    );
  `
  const css_invalidSingKey = css`
    background: rgba(255, 255, 255, 0.25) !important;
    color: #485461 !important;
    box-shadow: 0 0 10px ivory, inset 0 0 10px ivory;
    cursor: default;
  `
  const css_wrap = css`
    filter: blur(0.25px) opacity(0.75);
    transform: translateZ(0);
    padding-bottom: 1rem;
    text-align: center;
    display: grid;
    grid-auto-flow: column;
    justify-content: space-evenly;
    grid-template-columns: repeat(17, 1fr);
    img {
      padding-bottom: 0.25rem;
      cursor: default;
    }
  `

  return (
    <div className={css_wrap}>
      <span>
        <img src="../images/ohako/flat.svg" />
      </span>
      {minusColors.map((color, i) => (
        <span
          key={`minus${i}`}
          onClick={(e) => onClick(-1 * (7 - i))}
          className={css_number_wrap}
        >
          <span
            className={classNames(
              css_number,
              value == -1 * (7 - i) ? css_invalidSingKey : ''
            )}
            style={{ background: color }}
          >
            {7 - i}
          </span>
        </span>
      ))}
      <span key={0} onClick={(e) => onClick(0)} className={css_number_wrap}>
        <span
          className={classNames(
            css_number,
            css_zero,
            value == 0 ? css_invalidSingKey : ''
          )}
        >
          0
        </span>
      </span>
      {[...plusColors].reverse().map((color, i) => (
        <span
          key={`plus${i}`}
          onClick={(e) => onClick(i + 1)}
          className={css_number_wrap}
        >
          <span
            style={{ background: color }}
            className={classNames(
              css_number,
              value == i + 1 ? css_invalidSingKey : ''
            )}
          >
            {i + 1}
          </span>
        </span>
      ))}
      <span>
        <img src="../images/ohako/sharp.svg" />
      </span>
      <input type="hidden" id={`${primaryKey}-SingKey`} value={value} />
    </div>
  )
}

export default SingKeyPicker
