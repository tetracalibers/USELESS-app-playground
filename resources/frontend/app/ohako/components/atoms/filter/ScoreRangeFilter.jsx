import React, { useState, useEffect } from 'react'
import Slider, { SliderTooltip } from 'rc-slider'
import { useFilterSearch } from '../../../hooks/useFilterSearch'

const { createSliderWithTooltip, Handle } = Slider
const Range = createSliderWithTooltip(Slider.Range)

const handle = (props) => {
  const { value, dragging, index, ...restProps } = props
  return (
    <SliderTooltip
      prefixCls="rc-slider-tooltip"
      overlay={`${value}点`}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </SliderTooltip>
  )
}

const ScoreRangeFilter = () => {
  const [selectedScoreRange, setSelectedScoreRange] = useState([0, 100])
  const { onStartFiltering, filterConditions } = useFilterSearch()

  useEffect(() => {
    onStartFiltering(selectedScoreRange, 'score')
  }, [selectedScoreRange])

  return (
    <Range
      min={0}
      max={100}
      onChange={setSelectedScoreRange}
      defaultValue={
        !filterConditions['score']
          ? selectedScoreRange
          : filterConditions['score']
      }
      handle={handle}
    />
  )
}

export default ScoreRangeFilter
