import React from 'react'
import { css } from '@emotion/css'
import { CustomCard } from '@tsamantanis/react-glassmorphism'
import { NavLink } from 'react-router-dom'
import { randomColor } from 'randomcolor'
import classNames from 'classnames'

const GlassCardLink = ({
  linkTitle,
  link,
  className_card = '',
  className_link = '',
}) => {
  const cardColor = randomColor()

  const css_item = css`
    text-align: center;
    width: fit-content;
    margin: 1.5rem 1rem 0;
    padding: 1rem !important;
    border-radius: 50px !important;
    width: fit-content;
    filter: drop-shadow(0px 0px 10px #d7e1ec80);
    transform: translateZ(0);
    &:hover {
      filter: drop-shadow(0px 0px 50px #ffffff) opacity(0.7);
      transform: translateZ(0);
    }
  `
  const css_item_link = css`
    color: ${cardColor};
    font-size: 1.5rem;
    font-family: 'TsukushiBMaruGothic';
    filter: brightness(0.5);
    transform: translateZ(0);
  `

  return (
    <CustomCard
      effectColor={`${cardColor}20`}
      blur={25}
      borderRadius={0}
      className={classNames(css_item, className_card)}
    >
      <NavLink to={link} className={classNames(css_item_link, className_link)}>
        {linkTitle}
      </NavLink>
    </CustomCard>
  )
}

export default GlassCardLink
