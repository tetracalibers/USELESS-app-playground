import React from 'react'
import { useEditDiff } from '../../../providers/EditDiffProvider'
import { ImPencil2 } from 'react-icons/im'
import { Button } from 'react-materialize'
import { css } from '@emotion/css'
import classNames from 'classnames'

const EditButton = ({ record }) => {
  const { setDiff } = useEditDiff()

  const css_wrap = css`
    .btn-flat {
      padding: 0;
    }
    .btn-floating:hover {
      background: none;
      filter: brightness(0.5);
      transform: translateZ(0);
    }
  `
  const css_button = css`
    background: none;
    position: relative;
    color: skyblue;
    overflow: visible;
    transform: scale(1.25);
    @media (max-width: 40em) {
      width: auto;
      height: auto;
      transform: scale(1.5);
    }
    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(1.25);
      @media (max-width: 40em) {
        top: 50%;
        left: 100%;
        transform: translate(-100%, -50%) scale(1.5);
      }
    }
  `

  return (
    <div className={css_wrap}>
      <Button
        className={classNames('modal-trigger', css_button)}
        href="#ohakoEditSetlistFormModal"
        flat
        floating
        icon={<ImPencil2 />}
        node="button"
        waves="light"
        onClick={(e) => {
          setDiff(record)
        }}
      />
    </div>
  )
}

export default EditButton
