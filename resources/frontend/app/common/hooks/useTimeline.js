import { useReducer } from 'react'

const updateTimelineReducer = (log, newPost) => [...log, newPost]

export const useTimeline = (log = []) => {
  const [timelinePosts, appendPost] = useReducer(updateTimelineReducer, log)

  const loadTimeline = () => {
    fetch('/api/timeline', {
      method: 'POST',
      body: JSON.stringify({
        userId: localStorage.getItem('sns_id'),
        token: localStorage.getItem('sns_auth_token'),
      }),
      headers: new Headers({ 'Content-Type': 'application/json' }),
    })
      .then((res) => res.json())
      .then((data) => data.timelines)
      .then((timelines) => {
        timelines.map((post) => {
          appendPost(post)
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const speak = (comment) => {
    fetch('/api/speak', {
      method: 'POST',
      body: JSON.stringify({
        userId: localStorage.getItem('sns_id'),
        token: localStorage.getItem('sns_auth_token'),
        comment: comment,
      }),
      headers: new Headers({ 'Content-Type': 'application/json' }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .then(() => appendPost(comment))
      .catch((err) => {
        console.error(err)
      })
  }

  return {
    timelinePosts,
    speak,
    loadTimeline,
  }
}
