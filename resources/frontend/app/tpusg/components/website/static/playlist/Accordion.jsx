import React, { useState } from 'react'
import Link from './Link'
import { css } from '@emotion/css'
import { useWindowSize } from '@react-hook/window-size'
import classNames from 'classnames'
import { SlideDown } from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'

export default function PlayListContainer(props) {
  const { categoryName, songTree } = props
  const [width, height] = useWindowSize()
  const [activeTabIdx, setActiveTabIdx] = useState(-1)

  const accordionToggle = (i) =>
    activeTabIdx === i ? setActiveTabIdx(-1) : setActiveTabIdx(i)
  const css_accordion = (i) => (activeTabIdx === i ? 'accordion_active' : '')

  const css_dl = css`
    margin: 0;
  `
  const css_dt = css`
    font-size: 17px;
    font-weight: 500;
    padding: 0px 12px;
    line-height: 32px;
    margin: 0 0 2px;
    box-shadow: 0 2px 2px #fff;
    background: ${width < height
      ? 'hsl(210, 13%, 60%)'
      : ` linear-gradient(
      to right,
      hsl(210, 13%, 60%),
      hsla(0, 0%, 100%, 0.8)
    )`};
    color: white;
    cursor: pointer;
    transition: all 1s;
    &.accordion_active {
      background: linear-gradient(
        to right,
        rgba(89, 29, 129, 0.95),
        rgba(1, 162, 227, 0.95)
      );
      color: #019de7;
    }
  `
  const css_dd = css`
    font-size: 15px;
    color: #4d4d4d;
    background: rgba(255, 255, 255, 0.95);
    padding: 0.5em 20px;
    line-height: 1.5em;
    margin: 0;
  `
  const css_ol = css`
    list-style-type: decimal-leading-zero;
    list-style-position: inside;
    overflow-x: auto;
    padding: 0;
  `

  return (
    <dl className={css_dl}>
      {[...songTree.get(categoryName).keys()].map((cdName, i) => (
        <div key={cdName}>
          <dt
            className={classNames(css_dt, css_accordion(i))}
            onClick={() => accordionToggle(i)}
          >
            {cdName}
          </dt>
          <SlideDown>
            {activeTabIdx === i ? (
              <dd className={classNames(css_dd, css_accordion(i))}>
                <ol className={css_ol}>
                  {[...songTree.get(categoryName).get(cdName)].map(
                    (songInfo) => (
                      <Link songInfo={songInfo} key={songInfo.slug} />
                    )
                  )}
                </ol>
              </dd>
            ) : null}
          </SlideDown>
        </div>
      ))}
    </dl>
  )
}
