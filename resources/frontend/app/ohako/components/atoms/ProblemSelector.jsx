import React, { useEffect } from 'react'
import { css } from '@emotion/css'
import { useSetlists } from '../../providers/SetlistProvider'
import DropdownSelect from '../../../common/components/DropdownSelect'

const ProblemSelector = ({ value, setValue }) => {
  const { allProblems } = useSetlists()

  const color_pastel = [
    'rgba(227, 163, 171, .3)',
    'rgba(202, 226, 230, .3)',
    'rgba(204, 223, 181, .3)',
    'rgba(194, 199, 225, .3)',
  ]

  const css_wrap = css`
    .react-select__control {
      background: rgba(255, 255, 255, 0.3);
      border: none;
      border-radius: 30px;
    }
    .react-select__menu {
      background: rgba(255, 255, 255, 0);
      box-shadow: none;
      position: relative;
    }
    .react-select__menu-list {
      max-height: fit-content;
      overflow-y: visible;
    }
    .react-select__option {
      box-shadow: rgb(0 0 0 / 10%) 0px 4px 12px;
      border-radius: 30px 0 0 30px;
      margin-bottom: 0.25rem;
      &--is-focused {
        background-color: inherit;
        background-image: inherit;
        filter: drop-shadow(0 0 10px ivory);
        box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
      }
    }
    .react-select__multi-value {
      background-color: rgba(255, 255, 255, 0.5);
      &__remove:hover {
        background-color: rgb(131, 182, 234);
        color: rgba(250, 205, 205, 1);
      }
    }
    ${allProblems.map((_, idx) =>
      [...Array(6)].map(
        (_, i) =>
          `#react-select-${i}-option-${idx} {
          background-image: linear-gradient(
            90deg,
            ${color_pastel[idx % color_pastel.length]} 0%,
            rgba(255, 255, 255, 0) 100%
          );
        }`
      )
    )}
  `

  return (
    <div className={css_wrap}>
      <DropdownSelect
        optionsArray={allProblems}
        optionValueKey="id"
        optionLabelKey="content"
        onChange={setValue}
        defaultValue={value}
        multiple={true}
      />
    </div>
  )
}

export default ProblemSelector
