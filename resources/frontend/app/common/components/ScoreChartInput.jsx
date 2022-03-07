import React from 'react'
import { useWindowSize } from '@react-hook/window-size'
import { css } from '@emotion/css'
import { TextInput } from 'react-materialize'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const ScoreChartInput = ({ score, setScore }) => {
  const [width, height] = useWindowSize()
  const changeHandler = (e) => {
    const value = e.target.value
    setScore(value)
  }

  const css_wrap = css`
    display: flex;
    align-items: center;
    flex-direction: column-reverse;
    .input-field {
      width: ${width < height ? '20vw' : '20vh'};
      text-align: center;
    }
    .CircularProgressbar {
      width: ${width < height ? '25vw' : '25vh'};
    }
    .CircularProgressbar .CircularProgressbar-background {
      fill: #726cf8;
    }
    .CircularProgressbar .CircularProgressbar-path {
      stroke: #c488b280 !important;
    }
    .CircularProgressbar .CircularProgressbar-text {
      fill: white;
      text-shadow: 0 0 10px white;
      font-family: 'TsukushiBMaruGothic';
    }
  `

  return (
    <div className={css_wrap}>
      <TextInput onChange={(e) => changeHandler(e)} value={score} />
      <CircularProgressbar
        value={score == '' ? 0 : score}
        text={`${score == '' ? '未採' : score}点`}
        background
        backgroundPadding={6}
        styles={buildStyles({
          backgroundColor: '#3e98c7',
          textColor: '#fff',
          pathColor: '#fff',
          trailColor: 'transparent',
        })}
      />
    </div>
  )
}

export default ScoreChartInput
