import React from 'react'
import { useParams } from 'react-router-dom'

export default function NewArticleEditor() {
  const { kind, equipment } = useParams()
  
  return (
    <div>
      カテゴリ{`${kind}-${equipment}`}の記事投稿を行うページです。
      {equipment}担当のチームメンバーにのみ表示されます。
    </div>
  )
}