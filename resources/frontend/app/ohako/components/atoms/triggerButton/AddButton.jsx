import React from 'react'
import { css } from '@emotion/css'
import { Button } from 'react-materialize'
import { FiPlus } from 'react-icons/fi'
import classNames from 'classnames'

const AddButton = () => {
  const css_button = css`
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    width: 50px;
    height: 50px;
    background-color: #045de9;
    background-image: linear-gradient(315deg, #045de9 0%, #09c6f9 74%);
    box-shadow: inset 14px 0px 5px -10px rgb(0 0 0 / 20%),
      inset 13px 0px 2px -10px rgb(0 0 0 / 20%),
      inset 0px -3px 5px 0px rgb(250 241 220 / 50%),
      inset 0px -20px 10px 1px rgb(255 255 255 / 30%),
      inset -20px 10px 5px -20px rgb(0 0 0 / 30%),
      inset -20px 15px 10px -20px rgb(0 0 0 / 20%),
      inset 0px 20px 30px -5px rgb(0 0 0 / 30%),
      0px 2px 1px -1px rgb(245 225 183 / 80%), -16px 13px 5px -20px black,
      17px 13px 5px -20px black, 15px 19px 5px -20px black,
      -2px 34px 1px -30px rgb(0 0 0 / 40%),
      -2px 35px 3px -30px rgb(255 255 255 / 30%),
      -1px 16px 3px -5px rgb(0 0 0 / 50%), -1px 21px 3px -5px rgb(0 0 0 / 40%),
      1px -1px 5px 0px rgb(50 50 50 / 50%);
    &:hover {
      background-color: #045de9;
      background-image: linear-gradient(315deg, #045de9 0%, #09c6f9 74%);
      box-shadow: inset 14px 0px 5px -10px rgb(255 255 255 / 20%),
        inset 13px 0px 2px -10px rgb(255 255 255 / 20%),
        inset 0px -3px 5px 0px rgb(250 241 220 / 50%),
        inset 0px -20px 10px 1px rgb(255 255 255 / 30%),
        inset -20px 10px 5px -20px rgb(255 255 255 / 30%),
        inset -20px 15px 10px -20px rgb(255 255 255 / 20%),
        inset 0px 20px 30px -5px rgb(255 255 255 / 30%),
        0px 2px 1px -1px rgb(245 225 183 / 80%);
    }
    svg {
      font-size: 2rem;
      position: relative;
      top: -0.35em;
      color: #ffffff80;
      filter: drop-shadow(1px 1px 10px white);
      transform: translateZ(0);
    }
  `

  return (
    <Button
      className={classNames('btn-large', 'modal-trigger', css_button)}
      href="#ohakoAddSetlistFormModal"
      floating
      icon={<FiPlus />}
      node="button"
      waves="light"
    />
  )
}

export default AddButton
