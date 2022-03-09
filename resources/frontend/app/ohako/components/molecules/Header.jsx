import React from 'react'
import { css } from '@emotion/css'

const Header = () => {
  const image_text_back = '../images/ohako/twinkleColorful.jpg'
  const image_wrap_back = '../images/ohako/midnight.jpg'

  const css_wrap = css`
    position: sticky;
    padding: 18px;
    top: 0;
    background-image: url('${image_wrap_back}');
    background-position: center;
    width: 100vw;
    background-size: cover;
    height: 100px;
    z-index: 100;
    font-family: 'Satisfy', cursive;
    height: 100px;
    z-index: 100;
  `
  const css_title = css`
    background-image: url('${image_text_back}');
    color: transparent;
    background-clip: text;
    font-size: 3rem;
    display: block;
    text-align: center;
    filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.5)) blur(0.5px);
    @media (max-width: 40em) {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 8vw;
    }
  `

  return (
    <div className={css_wrap}>
      <span className={css_title}>Sing-History Maker</span>
    </div>
  )
}

export default Header
