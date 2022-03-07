import React from 'react'
import { css } from '@emotion/css'
import { useFilterSearch } from '../../../hooks/useFilterSearch'
import ResettableInput from '../../../../common/components/ResettableInput'

const MemoInputFilter = () => {
  const { onStartFiltering, onResetCondition, filterConditions } =
    useFilterSearch()

  const css_wrap = css`
    .input-field {
      background: rgba(255, 255, 255, 0.5);
      line-height: 1rem;
      border-radius: 1rem;
      .prefix.active {
        color: #045de9;
      }
    }
    input[type='text']:not(.browser-default):focus:not([readonly]) {
      border-bottom: 1px dashed #09c6f9;
      box-shadow: none;
    }
  `

  return (
    <div className={css_wrap}>
      <ResettableInput
        className={css_wrap}
        placeholder="search..."
        label=""
        value={filterConditions['memo']}
        onClear={(e) => onResetCondition('memo')}
        onChange={(e) => onStartFiltering(e.target.value, 'memo')}
      />
    </div>
  )
}

export default MemoInputFilter
