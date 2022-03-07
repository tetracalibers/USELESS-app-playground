import React from 'react'
import { BsCalendarDate, BsHash, BsJournalText } from 'react-icons/bs'
import { GiLoveSong, GiSing, GiArchiveRegister } from 'react-icons/gi'
import { MdStars, MdSportsScore } from 'react-icons/md'
import { GoIssueReopened } from 'react-icons/go'

export const columns = [
  {
    title: 'Sing Date',
    icon: <BsCalendarDate />,
    dataLabel: 'singDate',
    initial: new Date(),
    visible: true,
  },
  {
    dataLabel: 'artistId',
    initial: -1,
    visible: false,
    title: null,
    icon: null,
  },
  {
    title: 'Artist',
    icon: <GiSing />,
    dataLabel: 'artistName',
    initial: '',
    visible: true,
  },
  {
    title: 'Song Title',
    icon: <GiLoveSong />,
    dataLabel: 'songName',
    initial: '',
    visible: true,
  },
  {
    title: 'Jacket Image',
    icon: null,
    dataLabel: 'jacketImage',
    initial: '',
    visible: false,
  },
  {
    title: 'Key',
    icon: <BsHash />,
    dataLabel: 'singKey',
    initial: 0,
    visible: true,
  },
  {
    title: 'Rate',
    icon: <MdStars />,
    dataLabel: 'rating',
    initial: 0,
    visible: true,
  },
  {
    title: 'Score',
    icon: <MdSportsScore />,
    dataLabel: 'score',
    initial: '',
    visible: true,
  },
  {
    title: 'Problem',
    icon: <GoIssueReopened />,
    dataLabel: 'problems',
    initial: [],
    visible: true,
  },
  {
    title: 'Memo',
    icon: <BsJournalText />,
    dataLabel: 'memo',
    initial: '',
    visible: true,
  },
  {
    title: 'Regist Date',
    icon: <GiArchiveRegister />,
    dataLabel: 'registDate',
    initial: null,
    visible: true,
  },
]

export const columnsObj = columns.reduce(
  (obj, { dataLabel, initial, visible, title, icon }) => {
    obj[dataLabel] = { initial, visible, title, icon }
    return obj
  },
  {}
)

export const visibles = columns.filter((column) => column.visible)

export const visibleColumnValues = (initValue) => {
  return visibles.reduce((obj, { dataLabel }) => {
    obj[dataLabel] = initValue
    return obj
  }, {})
}
