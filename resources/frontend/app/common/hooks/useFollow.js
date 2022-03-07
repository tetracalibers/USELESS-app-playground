import { useReducer, useEffect } from 'react'
import { useRedirect } from './useRedirect'

const appendFriendReducer = (friends, newFriend) => [...friends, newFriend]

export const useFollow = () => {
  const [friends, appendFriends] = useReducer(appendFriendReducer, [])
  const { setJumpTo } = useRedirect()

  const loadFriends = () => {
    fetch('/api/friends', {
      method: 'POST',
      body: JSON.stringify({
        userId: localStorage.getItem('sns_id'),
      }),
      headers: new Headers({ 'Content-Type': 'application/json' }),
    })
      .then((res) => res.json().friends)
      .then((friends) => appendFriends(friends))
      .catch((err) => console.error(err))
  }

  const follow = (friendID) => {
    if (localStorage.getItem('sns_auth_token')) {
      alert('先にログインしてください')
      setJumpTo('/login')
      return
    }

    fetch('/api/follow', {
      method: 'POST',
      body: JSON.stringify({
        userId: localStorage.getItem('sns_id'),
        token: localStorage.getItem('sns_auth_token'),
        friendId: friendID,
      }),
      headers: new Headers({ 'Content-Type': 'application/json' }),
    })
      .then((res) => {
        appendFriends(friendID)
        res.json()
      })
      .catch((err) => console.error(err))
  }

  useEffect(() => {
    loadFriends
  }, [])

  return {
    friends,
    follow,
  }
}
