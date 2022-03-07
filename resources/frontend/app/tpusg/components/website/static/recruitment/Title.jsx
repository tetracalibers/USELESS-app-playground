import React from 'react'
import { css } from '@emotion/css'
import { useWindowSize } from '@react-hook/window-size'


export default function Title() {
  const [width, height] = useWindowSize()
  const css_title = css`
    font-size: 5em;
    color: #faffff;
    text-shadow: 1.5px 1.5px #333c41, -1.5px 1.5px #333c41,
      -1.5px -1.5px #333c41, 1.5px -1.5px #333c41, 1.5px 0px #333c41,
      0px 1.5px #333c41, -1.5px 0px #333c41, 0px -1.5px #333c41;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: 100;
    word-break: keep-all;
    margin: 0;
    padding: 2rem 0;
    text-align: ${width < height ? 'left' : 'center'};
  `

  return (
    <h1 className={css_title}>
      共同
      <wbr />
      執筆者
      <wbr />
      募集
    </h1>
  )
}
