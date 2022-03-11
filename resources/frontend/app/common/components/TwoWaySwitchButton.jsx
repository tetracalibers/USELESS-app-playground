import React from 'react'
import Toggle from 'react-toggle'
import { css } from '@emotion/css'

const TwoWaySwitchButton = ({
  onLabel,
  offLabel,
  onChange,
  checked,
  image = '../images/ohako/light.jpg',
}) => {
  const css_wrap = css`
    width: 100%;
    display: block;
    .react-toggle {
      transform: skewX(-15deg);
      width: 100%;
      height: 2.5rem;
      &:hover:not(.react-toggle--disabled) .react-toggle-track {
        background-color: white;
      }
      &:active:not(.react-toggle--disabled) .react-toggle-thumb {
        filter: drop-shadow(-1px -1px 10px white);
        transform: translateZ(0);
        box-shadow: inherit;
      }
      &--checked .react-toggle-track {
        background-color: white !important;
      }
      &--checked .react-toggle-track-x {
        opacity: 1;
        z-index: 1;
      }
      &--checked .react-toggle-thumb {
        left: 50%;
      }
    }
    .react-toggle-track {
      width: 100%;
      height: 100%;
      border-radius: 0;
      text-align: center;
      box-shadow: rgb(50 50 93 / 25%) 0px 30px 60px -12px inset,
        rgb(0 0 0 / 30%) 0px 18px 36px -18px inset;
      background: transparent;
      text-shadow: -1px -1px 1px rgb(255 255 255 / 10%),
        1px 1px 1px rgb(0 0 0 / 50%), 2px 2px 2px rgb(206 89 55 / 0%);
      color: aliceblue;
    }
    .react-toggle-track-x {
      width: 50%;
      position: relative;
      span {
        display: block;
        width: 50%;
        font-size: 1rem;
        position: absolute;
        top: 150%;
        left: 150%;
        transform: translate(-40%, -40%);
        padding-top: 0.5rem;
      }
    }
    .react-toggle-track-check {
      width: 50%;
      z-index: 1;
      opacity: 1;
      span {
        display: block;
        width: 50%;
        font-size: 1rem;
        position: absolute;
        left: 25%;
        top: 0;
        transform: translate(-28%, -5%);
        padding-top: 0.5rem;
      }
    }
    .react-toggle-thumb {
      border-radius: 0;
      width: 50%;
      height: 95%;
      border-radius: 0;
      background: white;
      border: none;
      background-image: url(${image});
      background-size: contain;
      box-shadow: rgba(255, 255, 255, 0.17) 0px -23px 25px 0px inset,
        rgba(255, 255, 255, 0.15) 0px -36px 30px 0px inset,
        rgba(255, 255, 255, 0.1) 0px -79px 40px 0px inset,
        rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
        rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
        rgba(0, 0, 0, 0.09) 0px 32px 16px;
    }
  `

  return (
    <label className={css_wrap}>
      <Toggle
        checked={checked}
        icons={{
          checked: <span>{offLabel}</span>,
          unchecked: <span>{onLabel}</span>,
        }}
        onChange={onChange}
      />
    </label>
  )
}

export default TwoWaySwitchButton
