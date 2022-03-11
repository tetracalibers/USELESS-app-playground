import React, { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import { useSetlists } from '../../providers/SetlistProvider'
import { usePreviousKey } from '../../hooks/usePreviousKey'
import { useLog } from '../../hooks/useLog'
import { TextInput, Collection, CollectionItem } from 'react-materialize'
import { TiTimesOutline } from 'react-icons/ti'
import { useiTunesAPI } from '../../../common/hooks/useiTunesAPI'
import { BiUserVoice } from 'react-icons/bi'
import Skeleton from 'react-loading-skeleton'
import { css } from '@emotion/css'
import { isMobile } from 'react-device-detect'

const MusicSuggestForm = () => {
  const {
    singArtistName,
    setArtistName,
    singArtistId,
    setArtistId,
    setSongName,
    singSongName,
    setJacketImage,
    setKey,
  } = useSetlists()
  const { artistLog, songLog } = useLog()
  const { getPreviousKey } = usePreviousKey()

  const [matchArtists, setMatchArtists] = useState([])
  const [visibleArtistSuggest, setVisibleArtistSuggest] = useState(false)
  const [artistInputValue, setArtistInputValue] = useState('')
  const [artistSettled, setArtistSettled] = useState(false)
  const [artistFetchQuery, setArtistFetchQuery] = useState('')
  const [isSuggestArtistFromFetch, setIsSuggestArtistFromFetch] =
    useState(false)

  const [canInputSong, setCanInputSong] = useState(false)
  const [suggestSongs, setSuggestSongs] = useState([])
  const [matchSongs, setMatchSongs] = useState([])
  const [songInputValue, setSongInputValue] = useState('')
  const [songSettled, setSongSettled] = useState(false)
  const [fetchedSongs, setFetchedSongs] = useState([])
  const [visibleSongSuggest, setVisibleSongSuggest] = useState(false)
  const [isSuggestSongFromFetch, setIsSuggestSongFromFetch] = useState(false)

  /* Phase - rerender after send error ---------------------------------------- */

  useEffect(() => {
    if (!canInputSong && singSongName.length > 0 && singArtistName.length > 0) {
      setCanInputSong(true)
      setSongInputValue(singSongName)
    }
  }, [])

  /* Phase - initializeLog ---------------------------------------------------- */

  useEffect(() => {
    if (artistLog.length > 0) {
      setMatchArtists(artistLog)
    }
  }, [artistLog, visibleArtistSuggest])

  /* Phase - suggestingArtistsFromLogs ---------------------------------------- */

  const startSuggestingArtists = () => {
    setVisibleArtistSuggest(true)
  }

  /* Phase - filteringArtistsLog ---------------------------------------------- */

  const _filteredArtists = (conditionWord) => {
    return matchArtists.filter(
      ({ artistName }) =>
        artistName.toLowerCase().indexOf(conditionWord.toLowerCase()) !== -1
    )
  }

  const startFilteringArtists = (e) => {
    const conditionWord = e.target.value
    setArtistInputValue(conditionWord)
    conditionWord.length > 0 && setMatchArtists(_filteredArtists(conditionWord))
  }

  /* util - for - fetchingSongsFromAPI ---------------------------------------- */

  const { iTunesAPIfetch: songFetch } = useiTunesAPI({
    mode: 'lookup',
    entity: 'song',
    attribute: 'songTerm',
    options: {
      id: singArtistId,
    },
  })

  const { refetch: songRefetch, isLoading } = useQuery(
    'songSearch',
    songFetch,
    {
      enabled: false,
      retry: 0,
      onSuccess: (data) => {
        let songs = []
        data.results.map(
          ({ wrapperType, trackName, artistName, artworkUrl30 }) => {
            if (wrapperType === 'track') {
              songs.push({
                song: trackName,
                artist: artistName,
                thumbnail: artworkUrl30,
              })
              // WARNING：この↓機能を有効にすると、米津玄師が中田ヤスタカになります
              //setArtistInputValue(artistName)
            }
          }
        )
        setFetchedSongs(songs)
        setMatchSongs(songs)
      },
      onError: (err) => console.log(err),
    }
  )

  /* util - for - suggestingSongsFromLogs ------------------------------------- */

  const _thisArtistSongsInLog = ({ artistId }) => {
    return songLog.filter((song) => song.artistId == artistId)
  }

  const _startSuggestingSongs = (artistInfo) => {
    const allSongs = _thisArtistSongsInLog(artistInfo)
    setSuggestSongs(allSongs)
    setVisibleSongSuggest(true)
    setMatchSongs(allSongs)
  }

  const restartSuggestingSongs = () => {
    setVisibleSongSuggest(true)
  }

  useEffect(() => {
    setMatchSongs(suggestSongs)
  }, [visibleSongSuggest])

  /* Phase - artistToBeConfirmed ---------------------------------------------- */

  const _clearArtistsSuggest = () => {
    setMatchArtists([])
  }

  const _updateGlobalArtistState = ({ artistId, artistName }) => {
    setArtistId(artistId)
    setArtistName(artistName)
  }

  const artistSelected = (artistInfo = 'NotFound') => {
    _clearArtistsSuggest()
    setArtistSettled(true)
    setVisibleArtistSuggest(false)
    if (artistInfo !== 'NotFound') {
      setArtistInputValue(artistInfo.artistName)
      _updateGlobalArtistState(artistInfo)
      _startSuggestingSongs(artistInfo)
    } else {
      _updateGlobalArtistState({ artistId: -1, artistName: artistInputValue })
    }
    setCanInputSong(true)
  }

  useEffect(() => {
    if (singArtistId > -1) {
      songRefetch()
    }
  }, [singArtistId])

  /* Phase - fetchingArtistsFromAPI ------------------------------------------- */

  const { iTunesAPIfetch: artistFetch } = useiTunesAPI({
    entity: 'musicArtist',
    attribute: 'artistTerm',
    term: artistFetchQuery,
  })

  const { refetch: artistRefetch } = useQuery('artistSearch', artistFetch, {
    enabled: false,
    retry: 0,
    onSuccess: (data) => {
      let artists = []
      data.results.map(({ artistName, artistId }) => {
        artists.push({ artistName, artistId })
      })
      setMatchArtists(artists)
      setIsSuggestArtistFromFetch(true)
    },
    onError: (err) => console.log(err),
  })

  const _notFoundMatchArtistsInLog =
    !artistSettled && matchArtists.length === 0 && artistInputValue.length > 0

  useEffect(() => {
    if (_notFoundMatchArtistsInLog) {
      setArtistFetchQuery(encodeURIComponent(artistInputValue))
    }
  }, [matchArtists])

  useEffect(() => {
    if (artistFetchQuery.length > 0) {
      artistRefetch()
    }
  }, [artistFetchQuery])

  /* Phase - filteringSongsLog ------------------------------------------ */

  const _filteredSongs = (conditionWord) => {
    return matchSongs.filter(
      ({ song }) =>
        song.toLowerCase().indexOf(conditionWord.toLowerCase()) !== -1
    )
  }

  const startFilteringSongs = (e) => {
    const conditionWord = e.target.value
    setSongInputValue(conditionWord)
    conditionWord.length > 0 && setMatchSongs(_filteredSongs(conditionWord))
  }

  /* Phase - songToBeConfirmed ------------------------------------------------ */

  const _clearSongsSuggest = () => {
    setMatchSongs([])
  }

  const _updateGlobalSongState = ({ song, artist, thumbnail, key }) => {
    setSongName(song)
    setArtistName(artist)
    setJacketImage(thumbnail)
    setKey(key)
  }

  const songSelected = (songInfo = 'NotFound') => {
    _clearSongsSuggest()
    setSongSettled(true)
    setVisibleSongSuggest(false)
    let key = 0
    if (songInfo !== 'NotFound') {
      setSongInputValue(songInfo.song)
      if (!isSuggestArtistFromFetch) {
        key = getPreviousKey(songInfo.song, singArtistId)
      }
      _updateGlobalSongState({ ...songInfo, key })
    } else {
      _updateGlobalSongState({
        song: songInputValue,
        artist: singArtistName,
        thumbnail: '',
        key: key,
      })
    }
  }

  /* Phase - suggestingSongsFromFetchedSongs ---------------------------------- */

  useEffect(() => {
    const _notFoundMatchSongsInLog =
      !songSettled &&
      matchSongs.length === 0 &&
      songInputValue.length > 0 &&
      singArtistId > 0
    if (_notFoundMatchSongsInLog) {
      setIsSuggestSongFromFetch(true)
      setMatchSongs(fetchedSongs)
    }
  }, [matchSongs])

  /* Phase - songIsCleared ---------------------------------------------------- */

  const _songStateReset = () => {
    setMatchSongs([])
    setSongInputValue('')
    setSongSettled(false)
    setIsSuggestSongFromFetch(false)
    setVisibleSongSuggest(false)
  }

  useEffect(() => {
    if (artistInputValue.length === 0 && singArtistName.length === 0)
      setCanInputSong(false)
  }, [artistInputValue])

  const _songGlobalStateReset = () => {
    setSongName('')
    setJacketImage('')
  }

  const songInputClear = () => {
    _songStateReset()
    _songGlobalStateReset()
  }

  /* Phase - artistIsCleared -------------------------------------------------- */

  const _artistStateReset = () => {
    setMatchArtists([])
    setArtistInputValue('')
    setArtistSettled(false)
    setArtistFetchQuery('')
    setVisibleArtistSuggest(false)
    setIsSuggestArtistFromFetch(false)
    _songStateReset()
  }

  const _artistGlobalStateReset = () => {
    setArtistName('')
    setArtistId(-1)
    _songGlobalStateReset()
  }

  const artistInputClear = () => {
    _artistStateReset()
    _artistGlobalStateReset()
  }

  /* View & Styling ----------------------------------------------------------- */

  const color_pastel = [
    'rgba(227, 163, 171, .3)',
    'rgba(202, 226, 230, .3)',
    'rgba(204, 223, 181, .3)',
    'rgba(194, 199, 225, .3)',
  ]

  const css_label = css`
    text-align: right;
    font-size: 0.7rem;
    font-family: 'TsukushiBMaruGothic';
    color: antiquewhite;
    padding-top: 1em;
  `

  return (
    <>
      <div>
        {isLoading ? (
          <Skeleton />
        ) : (
          <>
            <div className={css_label}>
              ローマ字名は楽曲入力時に正式な名称に変換されます
            </div>
            <TextInput
              value={artistInputValue}
              onChange={(e) => {
                if (isMobile) return
                startFilteringArtists(e)
              }}
              onCompositionEnd={(e) => startFilteringArtists(e)}
              onInput={(e) => startFilteringArtists(e)}
              placeholder="search artists"
              onFocus={() => startSuggestingArtists()}
              onTouchEnd={() => startSuggestingArtists()}
              icon={
                artistInputValue.length > 0 ? (
                  <TiTimesOutline onClick={(e) => artistInputClear(e)} />
                ) : (
                  ''
                )
              }
            />
          </>
        )}
        {visibleArtistSuggest ? (
          <Collection>
            <>
              {isSuggestArtistFromFetch ? (
                <CollectionItem onClick={(e) => artistSelected()}>
                  <span className="title">候補にない</span>
                </CollectionItem>
              ) : (
                ''
              )}
              {matchArtists.map((info, i) => (
                <CollectionItem
                  onClick={(e) => artistSelected(info)}
                  key={`artist-${i}`}
                  className={css`
                    --pastel: ${color_pastel[i % color_pastel.length]};
                  `}
                >
                  <span className="title">{info.artistName}</span>
                </CollectionItem>
              ))}
            </>
          </Collection>
        ) : (
          ''
        )}
      </div>
      <div>
        {isLoading ? (
          <Skeleton />
        ) : (
          <>
            {!canInputSong && (
              <div className={css_label}>
                まずは上の欄にアーティスト名を記入してください
              </div>
            )}
            <TextInput
              value={songInputValue}
              onChange={(e) => {
                if (isMobile) return
                startFilteringSongs(e)
              }}
              onCompositionEnd={(e) => startFilteringSongs(e)}
              onInput={(e) => startFilteringSongs(e)}
              onFocus={() => restartSuggestingSongs()}
              onTouchEnd={() => restartSuggestingSongs()}
              icon={
                songInputValue.length > 0 ? (
                  <TiTimesOutline onClick={(e) => songInputClear(e)} />
                ) : (
                  ''
                )
              }
              disabled={!canInputSong ? true : false}
              placeholder="search song"
            />
          </>
        )}
        {visibleSongSuggest && !isLoading ? (
          <Collection>
            <>
              {isSuggestSongFromFetch ? (
                <CollectionItem onClick={(e) => songSelected()}>
                  <span className="title">候補にない</span>
                </CollectionItem>
              ) : (
                ''
              )}
              {matchSongs.map((info, i) => (
                <CollectionItem
                  className="avatar"
                  onClick={(e) => songSelected(info)}
                  key={`song-${i}`}
                  className={css`
                    --pastel: ${color_pastel[i % color_pastel.length]};
                  `}
                >
                  {info.thumbnail.length > 0 ? (
                    <img className="circle" src={info.thumbnail} />
                  ) : (
                    ''
                  )}
                  <span className="title">{info.song}</span>
                  <p>
                    <BiUserVoice />
                    {info.artist}
                  </p>
                </CollectionItem>
              ))}
            </>
          </Collection>
        ) : (
          ''
        )}
      </div>
    </>
  )
}

export default MusicSuggestForm
