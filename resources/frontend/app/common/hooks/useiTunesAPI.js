import ky from 'ky'

export const useiTunesAPI = ({
  mode = 'search',
  country = 'jp',
  lang = 'ja_jp',
  media = 'music',
  entity,
  attribute,
  term,
  sort = 'popular',
  limit = 200,
  options = {},
}) => {
  const optionsParam = Object.keys(options).map(
    (key) => `&${key}=${options[key]}`
  )

  const iTunesAPIfetch = async () => {
    return await ky
      .get(
        `https://itunes.apple.com/${mode}?lang=${lang}&media=${media}&entity=${entity}&country=${country}&term=${term}&limit=${limit}&attribute=${attribute}&sort=${sort}${optionsParam}`
      )
      .json()
  }

  return { iTunesAPIfetch }
}
