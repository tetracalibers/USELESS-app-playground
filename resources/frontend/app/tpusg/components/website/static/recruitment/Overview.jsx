import React from 'react'
import { css } from '@emotion/css'

export default function Overview() {
  const css_overview = css`
    line-height: 1.5em;
    font-size: 1.5rem;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: 300;
    text-align: center;
  `

  return (
    <div className={css_overview}>
      当サイトでは、UNISON SQUARE GARDENの楽曲を題材に、
      <br />
      楽器演奏のコツや機材考察、初心者に向けたアドバイスなどを
      <br />
      記事として提供してくださる方を随時募集しております。
    </div>
  )
}
