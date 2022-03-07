import React, { useEffect } from 'react'
import { css } from '@emotion/css'
import { useSetlists } from '../../../providers/SetlistProvider'
import { BiUserVoice } from 'react-icons/bi'

const MusicInfoNoEdit = () => {
  const { editingRecordId, tmpRecords } = useSetlists()
  const { artistName, songName, jacketImage } =
    editingRecordId != -1
      ? tmpRecords[editingRecordId]
      : { artistName: '', songName: '', jacketImage: '' }

  const css_wrap = css`
    display: grid;
    ${jacketImage && 'grid-template-columns: 100px auto;'}
    align-content: center;
    justify-content: space-evenly;
    padding: 2rem;
    box-shadow: rgb(0 0 0 / 8%) 0px 4px 12px;
  `
  const css_image = css`
    grid-row: 1 / 3;
    grid-column: 1;
    width: 100px;
    height: 100px;
  `
  const css_song = css`
    display: block;
    grid-row: 1;
    grid-column: 2;
    box-sizing: border-box;
    font-size: 1.5rem;
    align-self: center;
    font-family: 'Noto Serif JP', serif;
    font-weight: 700;
    align-self: center;
    justify-self: start;
    min-width: 100px;
    text-align: center;
  `
  const css_artist = css`
    grid-row: 2;
    grid-column: 2;
    font-family: 'Noto Serif JP', serif;
    font-weight: 200;
    align-self: start;
    justify-self: end;
    font-style: italic;
    text-align: right;
  `

  return (
    <div className={css_wrap}>
      {jacketImage && jacketImage.length > 0 && (
        <img
          className="circle"
          src={jacketImage.replace('30x30', '100x100')}
          className={css_image}
        />
      )}
      <div className={css_song}>{songName}</div>
      <div className={css_artist}>
        <BiUserVoice />
        {artistName}
      </div>
    </div>
  )
}

export default MusicInfoNoEdit
