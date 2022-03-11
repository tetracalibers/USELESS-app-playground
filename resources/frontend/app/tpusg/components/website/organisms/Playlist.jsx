import React, { useEffect, useState } from 'react'
import List from '../static/playlist/List'
import { css } from '@emotion/css'
import { base64_tpusgSearchBack } from '../../../../styles/base64image'

export default function PlayListContainer() {
  const [songTree, setSongTree] = useState(new Map())
  let allSong

  useEffect(() => {
    fetch('/api/tpusg/songlist')
      .then((res) => res.json())
      .then((data) => {
        allSong = data.songList
        let allCategory = [...new Set(allSong.map((song) => song.category))]
        let tmpSongTree = new Map()
        allCategory.map((category) => {
          let thisCategorySong = allSong.filter(
            (songInfo) => songInfo.category === category
          )
          let thisCategoryCD = [
            ...new Set(thisCategorySong.map((song) => song.cd)),
          ]
          let classifyByCD = new Map()
          thisCategoryCD.map((cd) => {
            classifyByCD.set(
              cd,
              thisCategorySong.filter((songInfo) => songInfo.cd === cd)
            )
          })
          tmpSongTree.set(category, classifyByCD)
        })
        setSongTree(new Map(tmpSongTree))
      })
      .catch((err) => console.log(err))
  }, [])

  const css_background = css`
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -10;
    width: 100vw;
    height: 100vh;
    background-image: url('${base64_tpusgSearchBack}');
    background-size: contain;
    background-position: bottom;
    background-repeat: repeat-x;
    filter: opacity(0.9) blur(1px);
    transform: translateZ(0);
  `

  return (
    <div id="playlist">
      <div className={css_background}></div>
      <List songTree={songTree} />
    </div>
  )
}
