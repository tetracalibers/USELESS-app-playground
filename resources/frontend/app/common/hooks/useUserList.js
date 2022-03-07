import { useEffect, useState } from 'react'

export const useUserList = () => {
  const [users, setUsers] = useState([])

  const loadAllUsers = () => {
    fetch('/api/allusers')
      .then((res) => res.json())
      .then((users) => setUsers(users))
      .catch((err) => {
        console.error(err)
      })
  }

  useEffect(() => {
    loadAllUsers()
  }, [])

  return {
    users,
  }
}
