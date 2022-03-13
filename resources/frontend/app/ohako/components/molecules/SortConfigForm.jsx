import React from 'react'
import { css } from '@emotion/css'
import { useSortFlag } from '../../providers/SortProvider'
import { useSortExec } from '../../hooks/useSortExec'
import TwoWaySwitchButton from '../../../common/components/TwoWaySwitchButton'
import SortColumnSelect from '../atoms/sort/SortColumnSelect'
import SortOrderToggleButton from '../atoms/sort/SortOrderToggleButton'

const SortConfigForm = () => {
  const { customSortOn, sortModeToggle } = useSortFlag()
  useSortExec()

  const css_title = css`
    color: rgb(124, 152, 179);
  `
  const css_text = css`
    color: #4d4d4d;
    background: linear-gradient(
      rgba(255, 255, 255, 0) 40%,
      rgba(160, 215, 230, 0.9) 70%
    );
    line-height: 1rem;
    padding-right: 0.5rem;
    margin: 32px 0;
    display: inline;
    text-shadow: 0 0 2px white;
    font-family: 'TsukushiBMaruGothic';
  `

  return (
    <div>
      <h1 className={css_title}>Sort</h1>
      <TwoWaySwitchButton
        onLabel="CUSTOM"
        offLabel="DEFAULT"
        checked={customSortOn}
        onChange={sortModeToggle}
      />
      {customSortOn && (
        <>
          <div>
            <div className={css_text}>基準となる列</div>
            <SortColumnSelect />
          </div>
          <div>
            <div className={css_text}>並び順</div>
            <SortOrderToggleButton />
          </div>
        </>
      )}
    </div>
  )
}

export default SortConfigForm
