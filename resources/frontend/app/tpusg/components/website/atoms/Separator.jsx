import React from 'react'
import { css } from '@emotion/css'
import { Parallax } from 'react-materialize'
//import separateBack from '../../../../../../../public/images/tpusg/tpusg_playBack.svg'

export default function Container() {
    const separateBack = '../images/tpusg/tpusg_playBack.svg'
  const css_separate = css`
    height: 10vh;
    background-color: rgba(255, 255, 255, 0.2);
    .parallax {
      background-color: white;
    }
  `

  return (
    <Parallax
      image={<img src={separateBack} />}
      options={{
        responsiveThreshold: 0,
      }}
      className={css_separate}
    />
  )
}
