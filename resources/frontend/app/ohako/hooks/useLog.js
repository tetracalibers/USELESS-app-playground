import { useMemo } from 'react'
import { useNonDuplicated } from '../../common/hooks/useNonDuplicate'
import { useBackup } from './useBackup'
import format from 'date-fns/format'

export const useLog = () => {
  const { getNonDuplicatedObj } = useNonDuplicated()
  const { backupData } = useBackup()

  const singDateLog = useMemo(() => {
    const nonDuplicatedObj = getNonDuplicatedObj({
      duplicateArray: backupData,
      key: 'singDate',
      value: (singDate) => format(singDate, 'yyyy/MM/dd'),
    })
    return Object.keys(nonDuplicatedObj).map((key) => {
      return {
        object: key,
        string: nonDuplicatedObj[key],
      }
    })
  }, [backupData])

  const artistLog = useMemo(() => {
    const nonDuplicatedObj = getNonDuplicatedObj({
      duplicateArray: backupData,
      key: 'artistName',
      value: ['artistId'],
    })
    return Object.keys(nonDuplicatedObj).map((key) => {
      return {
        artistName: key,
        artistId: nonDuplicatedObj[key][0],
      }
    })
  }, [backupData])

  const songLog = useMemo(() => {
    const nonDuplicatedObj = getNonDuplicatedObj({
      duplicateArray: backupData,
      key: 'songName',
      value: ['artistName', 'artistId', 'jacketImage'],
    })
    return Object.keys(nonDuplicatedObj).map((key) => {
      return {
        song: key,
        artist: nonDuplicatedObj[key][0],
        artistId: nonDuplicatedObj[key][1],
        thumbnail: nonDuplicatedObj[key][2],
      }
    })
  }, [backupData])

  return { songLog, artistLog, singDateLog }
}
