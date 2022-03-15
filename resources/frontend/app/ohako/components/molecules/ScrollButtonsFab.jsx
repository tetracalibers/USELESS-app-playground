import React from 'react'
import { css } from '@emotion/css'
import { Button } from 'react-materialize'
import { GiScrollUnfurled } from 'react-icons/gi'
import GoToLatestButton from '../atoms/scroll/GoToLatestButton'
import GoToTopButton from '../atoms/scroll/GoToTopButton'

const ScrollButtonsFab = () => {
  const css_wrap = css`
    .fixed-action-btn {
      right: 6rem;
      bottom: 1rem;
      padding: 0;
      & > a {
        width: 50px;
        height: 50px;
        position: relative;
        font-size: 2rem;
        background-color: #9cdaf8;
        background-image: linear-gradient(315deg, #9cdaf8 0%, #98fcbd 74%);
        color: cadetblue;
        box-shadow: rgb(0 0 0 / 20%) 14px 0px 5px -10px inset,
          rgb(0 0 0 / 20%) 13px 0px 2px -10px inset,
          rgb(250 241 220 / 50%) 0px -3px 5px 0px inset,
          rgb(255 255 255 / 30%) 0px -20px 10px 1px inset,
          rgb(0 0 0 / 30%) -20px 10px 5px -20px inset,
          rgb(0 0 0 / 20%) -20px 15px 10px -20px inset,
          rgb(0 0 0 / 30%) 0px 20px 30px -5px inset,
          rgb(245 225 183 / 80%) 0px 2px 1px -1px, black -16px 13px 5px -20px,
          black 17px 13px 5px -20px, black 15px 19px 5px -20px,
          rgb(0 0 0 / 40%) -2px 34px 1px -30px,
          rgb(255 255 255 / 30%) -2px 35px 3px -30px,
          rgb(0 0 0 / 50%) -1px 16px 3px -5px,
          rgb(0 0 0 / 40%) -1px 21px 3px -5px,
          rgb(50 50 50 / 50%) 1px -1px 5px 0px;
        &:hover {
          box-shadow: inset 14px 0px 5px -10px rgb(255 255 255 / 20%),
            inset 13px 0px 2px -10px rgb(255 255 255 / 20%),
            inset 0px -3px 5px 0px rgb(250 241 220 / 50%),
            inset 0px -20px 10px 1px rgb(255 255 255 / 30%),
            inset -20px 10px 5px -20px rgb(255 255 255 / 30%),
            inset -20px 15px 10px -20px rgb(255 255 255 / 20%),
            inset 0px 20px 30px -5px rgb(255 255 255 / 30%),
            0px 2px 1px -1px rgb(245 225 183 / 80%);
        }
        & > svg {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
      ul {
        right: 3.5rem;
      }
    }
  `

  return (
    <div className={css_wrap}>
      <Button
        fab={{
          direction: 'left',
          hoverEnabled: false,
        }}
        floating
        large
        waves="light"
        node="button"
        icon={<GiScrollUnfurled />}
      >
        <GoToLatestButton />
        <GoToTopButton />
      </Button>
    </div>
  )
}

export default ScrollButtonsFab
