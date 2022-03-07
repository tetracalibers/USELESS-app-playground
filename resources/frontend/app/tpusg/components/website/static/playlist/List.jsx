import React from 'react'
import Accordion from './Accordion'
import { useWindowSize } from '@react-hook/window-size'
import { css } from '@emotion/css'

export default function PlayListContainer(props) {
  const { songTree } = props
  const [width, height] = useWindowSize()

  const css_wrapDiv = css`
    font-family: 'Zen Kaku Gothic Antique', sans-serif;
    font-weight: 300;
    padding: ${width < height ? '2rem' : '4rem'};
    box-sizing: border-box;
  `
  const css_h1 = css`
    display: inline-block;
    color: #fff;
    text-shadow: 1px 6px 5px rgba(0, 0, 0, 0.8);
    font-family: 'Megrim', cursive;
    padding: 0 0.5em 0 0.5em;
    margin: 0 0 2px;
    position: relative;
    background: #01a2e3;
    font-size: 3rem;
    line-height: 1em;
    &::after {
      content: '';
      box-shadow: -5px 0 3px -3px #01a2e3;
      display: inline-block;
      margin-left: 0.4em;
      padding-left: 0.4em;
      position: absolute;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 3rem 3rem 0 0;
      border-color: #01a2e3 transparent transparent transparent;
    }
  `

  return (
    <>
      {[...songTree.keys()].map((categoryName) => (
        <div key={categoryName} className={css_wrapDiv}>
          <h1 className={css_h1}>{categoryName}</h1>
          <Accordion categoryName={categoryName} songTree={songTree} />
        </div>
      ))}
    </>
  )
}
