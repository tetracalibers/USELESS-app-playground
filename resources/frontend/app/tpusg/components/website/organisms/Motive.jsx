import React from 'react'
import { css } from '@emotion/css'
import { useWindowSize } from '@react-hook/window-size'

export default function Motive() {
  const [width, height] = useWindowSize()
  const css_title = css`
    font-size: ${width < height ? '7vw' : '3em'};
    text-align: right;
    margin: 0;
    padding: 2rem 0;
  `
  const css_text = css`
    font-size: ${width < height ? '3vw' : '1.25em'};
    font-family: 'TsukushiBMaruGothic';
    background-color: #eeefea;
    color: #8592be;
    text-align: center;
    padding: 0 5vw;
    word-break: keep-all;
    display: grid;
    justify-content: center;
    align-content: center;
    min-height: 100vh;
    p {
      margin: 0;
      padding: 1rem 0;
      line-height: 2em;
    }
  `

  return (
    <div className={css_text} id="motive">
      <h1 className={css_title}>
        この曲を弾きたい、
        <wbr />
        誰かに聞きたい…
        <wbr />
        そんな時に。
      </h1>
      <p>
        ふとしたきっかけで楽器を手にしても、
        <wbr />
        初心者が楽器のアドバイスを聞くのは難しい。
        <br />
      </p>
      <p>
        けれど、共通の好きなアーティストの曲なら、
        <wbr />
        喜んで語ってくれる人がいるかもしれない。
        <br />
        教えてくれる人がいるかもしれない。
        <br />
      </p>
      <p>
        このサイトでは、
        <wbr />
        UNISON SQUARE GARDENの楽曲を題材に、
        <wbr />
        ギター・ベース・ドラムについての
        <wbr />
        いろいろなアドバイスをまとめていきます。
        <br />
        躓きそうになったり、それを助けてあげたり
        <wbr />
        いろんな使い方をしてほしい。
      </p>
      <p>
        しかし、アドバイスする側もされる側もお互い名前は見えない。
        <br />
        相手が不快にならない程度のマナーは守りながら、
        <wbr />
        気楽に盛り上げていこう。
      </p>
    </div>
  )
}
