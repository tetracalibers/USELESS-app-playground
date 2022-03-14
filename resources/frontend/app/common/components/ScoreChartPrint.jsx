import React from 'react'
import { css } from '@emotion/css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'

const ScoreChartPrint = ({ score }) => {
  const css_wrap = css`
    .CircularProgressbar {
      width: 4rem;
    }
  `

  return (
    <div className={css_wrap}>
      <CircularProgressbar
        value={score == '' ? 0 : score}
        text={`${score == '' || score == 0 ? '未採' : score}点`}
        strokeWidth={5}
        styles={buildStyles({
          textColor: 'ivory',
          pathColor: 'rgba(196,136,178,0.80)',
          trailColor: 'rgba(114,108,248,0.50)',
        })}
      />
    </div>
  )
}

export default ScoreChartPrint
