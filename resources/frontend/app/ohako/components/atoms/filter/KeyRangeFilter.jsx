import React, { useState, useEffect } from 'react'
import { useFilterSearch } from '../../../hooks/useFilterSearch'
import Slider from 'rc-slider'
import { css } from '@emotion/css'
import classNames from 'classnames'

const flatIcon = '../images/ohako/flat.svg'
const sharpIcon = '../images/ohako/sharp.svg'

const KeyRangeFilter = () => {
  const [selectedKeyRange, setSelectedKeyRange] = useState([-7, 7])
  const { onStartFiltering, filterConditions } = useFilterSearch()

  useEffect(() => {
    onStartFiltering(selectedKeyRange, 'singKey')
  }, [selectedKeyRange])

  const css_wrap = css`
    padding-bottom: 4rem;
  `
  const css_img = css`
    width: 1.5rem;
    position: relative;
    top: -1.8rem;
    line-height: 1rem;
  `
  const css_number = css`
    font-family: 'Satisfy', cursive;
    font-size: 1.1rem;
    line-height: 1rem;
  `
  const css_zero = css`
    font-size: 1.25rem;
  `

  const marks = {
    '-7': <img src={flatIcon} className={css_img} />,
    '-6': <span className={css_number}>6</span>,
    '-5': <span className={css_number}>5</span>,
    '-4': <span className={css_number}>4</span>,
    '-3': <span className={css_number}>3</span>,
    '-2': <span className={css_number}>2</span>,
    '-1': <span className={css_number}>1</span>,
    0: <span className={classNames(css_number, css_zero)}>0</span>,
    1: <span className={css_number}>1</span>,
    2: <span className={css_number}>2</span>,
    3: <span className={css_number}>3</span>,
    4: <span className={css_number}>4</span>,
    5: <span className={css_number}>5</span>,
    6: <span className={css_number}>6</span>,
    7: <img src={sharpIcon} className={css_img} />,
  }

  return (
    <div className={css_wrap}>
      <Slider.Range
        min={-7}
        max={7}
        marks={marks}
        step={1}
        onChange={setSelectedKeyRange}
        defaultValue={
          !filterConditions['singKey']
            ? selectedKeyRange
            : filterConditions['singKey']
        }
      />
    </div>
  )
}

export default KeyRangeFilter
