import ky from 'ky'
import Cookies from 'js-cookie'

export const useLaravelSanctum = () => {
  const api = ky.extend({
    hooks: {
      beforeRequest: [
        async (request) => {
          await ky.get('/sanctum/csrf-cookie')
          request.headers.set('X-XSRF-TOKEN', Cookies.get('XSRF-TOKEN'))
        },
      ],
    },
  })

  return { api }
}
