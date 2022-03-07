import React from 'react'
import { useSort } from '../../../hooks/useSort'
import { ImSortAmountAsc, ImSortAmountDesc } from 'react-icons/im'
import Toggle from 'react-toggle'
import { css } from '@emotion/css'

const SortOrderToggleButton = () => {
  const { toggleSortOrder, isDesc } = useSort()

  const css_wrap = css`
    width: 100%;
    display: block;
    position: relative;
    z-index: 0;
    .react-toggle {
      width: 100%;
      height: 2.5rem;
      &:hover:not(.react-toggle--disabled) .react-toggle-track {
        background-color: white;
      }
      &:active:not(.react-toggle--disabled) .react-toggle-thumb {
        filter: drop-shadow(-1px -1px 10px white);
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
      border-radius: 30px;
      box-shadow: rgb(50 50 93 / 25%) 0px 30px 60px -12px inset,
        rgb(0 0 0 / 30%) 0px 18px 36px -18px inset;
      background: white;
      color: #7c98b3;
      text-align: center;
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
      border-radius: 30px;
      background: white;
      border: none;
      box-shadow: rgba(255, 255, 255, 0.17) 0px -23px 25px 0px inset,
        rgba(255, 255, 255, 0.15) 0px -36px 30px 0px inset,
        rgba(255, 255, 255, 0.1) 0px -79px 40px 0px inset,
        rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
        rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
        rgba(0, 0, 0, 0.09) 0px 32px 16px;
    }
  `
  const css_icon = css`
    font-size: 4rem;
    transition: opacity 0.25s ease;
    text-align: center;
  `

  return (
    <label className={css_wrap}>
      <Toggle
        checked={isDesc}
        icons={{
          checked: <span>ASC</span>,
          unchecked: <span>DESC</span>,
        }}
        onChange={toggleSortOrder}
      />
      <div className={css_icon}>
        {isDesc ? <ImSortAmountDesc /> : <ImSortAmountAsc />}
      </div>
    </label>
  )
}

export default SortOrderToggleButton
