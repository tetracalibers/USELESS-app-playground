import React from 'react'
import { NavLink } from 'react-router-dom'
import { myPath } from '../../../../../routes/path'
import { css } from '@emotion/css'
const path = myPath.tpusg

export default function Link(props) {
  const { songInfo } = props

  const css_li = css`
    white-space: nowrap;
  `
  const css_NavLink = css`
    color: #019de7;
    font-weight: 400;
    margin: 0.5em 20px;
    &:hover {
      text-decoration: underline;
    }
  `

  return (
    <li className={css_li}>
      <NavLink
        className={css_NavLink}
        to={`../../${path.Play(songInfo.slug, 'guitar')}`}
      >
        {songInfo.song}
      </NavLink>
    </li>
  )
}
