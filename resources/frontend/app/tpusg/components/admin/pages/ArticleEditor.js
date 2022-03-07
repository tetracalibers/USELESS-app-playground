import React from 'react'
import { useParams } from 'react-router-dom'

export default function ArticleEditor() {
  const { kind, equipment, id } = useParams()
  
  return (
    <div>
      記事{`${kind}-${equipment}/${id}`}の編集を行うページです。
      {equipment}担当のチームメンバーにのみ表示されます。
    </div>
  )
}