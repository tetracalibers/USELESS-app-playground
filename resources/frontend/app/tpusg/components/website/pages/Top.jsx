import React from 'react'
import Head from '../../../../common/components/Head'
import Hero from '../organisms/Hero'
import Motive from '../organisms/Motive'
import Playlist from '../organisms/Playlist'
import Recruitment from '../organisms/Recruitment'
import Separator from '../atoms/Separator'

const Top = () => {
  return (
    <>
      <Head title="ReTryPlayingUSG" materialON />
      <Hero />
      <Separator />
      <Motive />
      <Separator />
      <Playlist />
      <Recruitment />
    </>
  )
}

export default Top
