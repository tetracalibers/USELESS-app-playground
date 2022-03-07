import { useEffect, useState } from 'react'
import { useFilterSearch } from './useFilterSearch'

export const useToggleFilterMode = () => {
  const { clearFiltering } = useFilterSearch()
  const [customFilterOn, setCustomFilterOn] = useState(false)

  const filterModeToggle = () => {
    setCustomFilterOn(!customFilterOn)
  }

  useEffect(() => {
    if (!customFilterOn) clearFiltering()
  }, [customFilterOn])

  return {
    customFilterOn,
    filterModeToggle,
  }
}
