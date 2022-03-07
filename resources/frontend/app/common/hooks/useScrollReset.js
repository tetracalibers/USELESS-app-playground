import { useLocation } from 'react-router'
import { useEffect } from 'react'

export const useScrollReset = () => {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
    }
  }, [hash, pathname])
}
