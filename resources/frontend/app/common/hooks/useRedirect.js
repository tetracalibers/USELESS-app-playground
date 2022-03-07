import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const useRedirect = () => {
  const [jumpTo, setJumpTo] = useState('')
  const navigate = useNavigate()
  const goToOtherPage = () => navigate(jumpTo)

  useEffect(() => {
    console.log(jumpTo)
    if (jumpTo !== '') {
      goToOtherPage()
    }
  }, [navigate, jumpTo])

  return {
    setJumpTo,
  }
}
