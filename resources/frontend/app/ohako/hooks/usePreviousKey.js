import { useSetlists } from '../providers/SetlistProvider'

export const usePreviousKey = () => {
  const { allRecords } = useSetlists()

  const getPreviousKey = (songName, artistId) => {
    const matchedSong = allRecords.filter(
      (info) => songName == info.songName && artistId == info.artistId
    )
    matchedSong.sort((current, next) =>
      current[singDate] > next[singDate] ? 1 : -1
    )
    return matchedSong.length > 0 ? matchedSong[0].singKey : 0
  }

  return { getPreviousKey }
}
