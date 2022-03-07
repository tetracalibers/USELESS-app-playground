import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { myPath } from '../../../../routes/path'
import Side from '../organisms/Side'
const path = myPath.tpusg

export default function Play() {
  const { song, equipment } = useParams()

  return (
    <div>
      {song}の{equipment}奏法を語り合うページです。
      <NavLink to={`../../../${path.Play(song, 'guitar')}`}>Guitar</NavLink>
      <NavLink to={`../../../${path.Play(song, 'bass')}`}>Bass</NavLink>
      <NavLink to={`../../../${path.Play(song, 'drums')}`}>Drums</NavLink>
      <Side returnDir='../../../' />
    </div>
  )
}
