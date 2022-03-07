import React from 'react'
import { css } from '@emotion/css'
import { Parallax } from 'react-materialize'
import Clock from '../atoms/Clock'

const Hero = () => {
  const image_hero = '../images/tpusg/starlight.jpeg'
  const css_back = css`
    filter: blur(2px) opacity(0.7);
  `
  const css_hero = css`
    height: 100vh;
    .parallax {
      background-color: white;
    }
  `

  return (
    <div id="top">
      <Parallax
        image={<img src={image_hero} className={css_back} />}
        options={{
          responsiveThreshold: 0,
        }}
        className={css_hero}
      />
      <Clock />
    </div>
  )
}

export default Hero
