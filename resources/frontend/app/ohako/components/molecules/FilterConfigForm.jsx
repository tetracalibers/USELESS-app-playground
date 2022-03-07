import React, { useEffect } from 'react'
import { css } from '@emotion/css'
import { useToggleFilterMode } from '../../hooks/useToggleFilterMode'
import { columnsObj as cl } from '../../schema/columns'
import SingDateSelectFilter from '../atoms/filter/SingDateSelectFilter'
import ArtistSelectFilter from '../atoms/filter/ArtistSelectFilter'
import SongSelectFilter from '../atoms/filter/SongSelectFilter'
import ProblemSelectFilter from '../atoms/filter/ProblemSelectFilter'
import MemoInputFilter from '../atoms/filter/MemoInputFilter'
import KeyRangeFilter from '../atoms/filter/KeyRangeFilter'
import RateRangeFilter from '../atoms/filter/RateRangeFilter'
import ScoreRangeFilter from '../atoms/filter/ScoreRangeFilter'
import TwoWaySwitchButton from '../../../common/components/TwoWaySwitchButton'

const FilterConfigForm = () => {
  const { customFilterOn, filterModeToggle } = useToggleFilterMode()

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
  `
  const css_wrap = css`
    label {
      background-color: #fefefe;
      background-image: linear-gradient(315deg, #fefefe 0%, #00a4e4 74%);
      color: transparent;
      background-clip: text;
    }
  `

  return (
    <div className={css_wrap}>
      <h1 className={css_title}>Filter</h1>
      <TwoWaySwitchButton
        onLabel="ON"
        offLabel="OFF"
        checked={customFilterOn}
        onChange={(e) => filterModeToggle()}
      />
      {customFilterOn && (
        <>
          <div>
            <div className={css_text}>{cl['singDate'].title}</div>
            <SingDateSelectFilter />
          </div>
          <div>
            <div className={css_text}>{cl['artistName'].title}</div>
            <ArtistSelectFilter />
          </div>
          <div>
            <div className={css_text}>{cl['songName'].title}</div>
            <SongSelectFilter />
          </div>
          <div>
            <div className={css_text}>{cl['problems'].title}</div>
            <ProblemSelectFilter />
          </div>
          <div>
            <div className={css_text}>{cl['singKey'].title}</div>
            <KeyRangeFilter />
          </div>
          <div>
            <div className={css_text}>{cl['rating'].title}</div>
            <RateRangeFilter />
          </div>
          <div>
            <div className={css_text}>{cl['score'].title}</div>
            <ScoreRangeFilter />
          </div>
          <div>
            <div className={css_text}>{cl['memo'].title}</div>
            <MemoInputFilter />
          </div>
        </>
      )}
    </div>
  )
}

export default FilterConfigForm
