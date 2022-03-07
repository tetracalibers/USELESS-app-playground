import React from 'react'
import { useParams } from 'react-router-dom'

export default function MyProfileEditor() {
  const { user } = useParams()
  
  return (
    <div>
      {user}のプロフィール編集ページです。
      {user}にのみ表示されます。
    </div>
  )
}