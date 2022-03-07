import React, { useState, useEffect } from 'react'
import { useFilterSearch } from '../../../hooks/useFilterSearch'
import Slider from 'rc-slider'
import { css } from '@emotion/css'
import { GiAlliedStar } from 'react-icons/gi'

const RateRangeFilter = () => {
  const [selectedRateRange, setSelectedRateRange] = useState([0, 5])
  const { onStartFiltering, filterConditions } = useFilterSearch()

  useEffect(() => {
    onStartFiltering(selectedRateRange, 'rating')
  }, [selectedRateRange])

  const css_wrap = css`
    padding-bottom: 4rem;
  `
  const css_img = css`
    position: relative;
    top: -1.8rem;
    line-height: 1rem;
    font-size: 1.5rem;
  `
  const css_number = css`
    font-family: 'Satisfy', cursive;
    font-size: 1.1rem;
    line-height: 1rem;
  `

  const marks = {
    0: (
      <span className={css_img}>
        <GiAlliedStar />
      </span>
    ),
    1: <span className={css_number}>1</span>,
    2: <span className={css_number}>2</span>,
    3: <span className={css_number}>3</span>,
    4: <span className={css_number}>4</span>,
    5: <span className={css_number}>5</span>,
  }

  return (
    <div className={css_wrap}>
      <Slider.Range
        min={0}
        max={5}
        marks={marks}
        step={1}
        onChange={setSelectedRateRange}
        defaultValue={
          !filterConditions['rating']
            ? selectedRateRange
            : filterConditions['rating']
        }
      />
    </div>
  )
}

export default RateRangeFilter
