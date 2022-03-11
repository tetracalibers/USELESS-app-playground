import fetchJsonp from 'fetch-jsonp'

export const useiTunesAPI = ({
  mode = 'search',
  country = 'jp',
  lang = 'ja_jp',
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
    let response = await fetchJsonp(
      `https://itunes.apple.com/${mode}?lang=${lang}&entity=${entity}&country=${country}${
        mode == 'search'
          ? `&term=${term}&attribute=${attribute}`
          : `&sort=${sort}`
      }&limit=${limit}${optionsParam}`
    )
    return response.json()
  }

  return { iTunesAPIfetch }
}
