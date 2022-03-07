import React from 'react'
import { css } from '@emotion/css'
import { CardPanel } from 'react-materialize'
import { useWindowSize } from '@react-hook/window-size'
import Title from '../static/recruitment/Title'
import Form from '../static/recruitment/Form'
import Overview from '../static/recruitment/Overview'

export default function RecruitmentContainer() {
  const [width, height] = useWindowSize()

  const css_container = css`
    background: #faffff;
    background-image: linear-gradient(#9fc9c7 1.5px, rgba(255, 255, 255, 0) 0),
      linear-gradient(90deg, #9fc9c7 1.5px, rgba(255, 255, 255, 0) 0),
      linear-gradient(#bbcacf 1.5px, rgba(255, 255, 255, 0) 0),
      linear-gradient(90deg, #bbcacf 1.5px, rgba(255, 255, 255, 0) 0);
    background-size: 75px 75px, 75px 75px, 15px 15px, 15px 15px;
    color: #123ba4;
    padding: 2rem;
    position: relative;
    &::before {
      content: '';
      background: linear-gradient(45deg, #123ba4 50%, transparent 52%),
        linear-gradient(315deg, #bbcacf 50%, transparent 52%);
      background-size: 40px 40px;
      height: 30px;
      position: absolute;
      width: calc(100vw + 2rem);
      top: 0;
      left: -2rem;
      transform: rotate(180deg);
    }
  `
  const css_card = css`
    margin: 2rem ${width < height ? 0 : '2rem'};
  `

  return (
    <div className={css_container} id="recruitment">
      <Title />
      <Overview />
      <CardPanel className={css_card}>
        <Form />
      </CardPanel>
    </div>
  )
}
