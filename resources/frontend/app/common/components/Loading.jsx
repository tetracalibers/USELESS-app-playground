import React from 'react'
import { useLoading, Hearts } from '@agney/react-loading'
import { css } from '@emotion/css'
import { useWindowSize } from '@react-hook/window-size'

const Loading = () => {
  const [width, height] = useWindowSize()
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <Hearts width="250" color="#faebd7" />,
  })

  const css_fuwafuwa = css`
    width: ${width < height ? '60vw' : '40vh'};
    height: auto;
    padding-top: ${width < height ? 'calc(100vh - 60vw)' : '60vh'};
    padding-left: ${width < height ? '30vw' : '20vh'};
    box-sizing: content-box;
    animation: fuwafuwa 3s infinite ease-in-out 0.8s alternate;
    transition: 1.5s ease-in-out;
    @keyframes fuwafuwa {
      0% {
        transform: translate(0, 0) rotate(-7deg);
      }
      50% {
        transform: translate(0, -7px) rotate(0deg);
      }
      100% {
        transform: translate(0, 0) rotate(7deg);
      }
    }
  `
  const css_wrap = css`
    width: 100vw;
    height: 100vh;
    z-index: 10000;
    overflow: hidden;
    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: ${width < height ? '40vw' : '40vh'};
    }
  `

  return (
    <div {...containerProps} className={css_wrap}>
      <div>{indicatorEl}</div>
      <img src="../images/ohako/kyoryu.jpg" className={css_fuwafuwa} />
    </div>
  )
}

export default Loading
