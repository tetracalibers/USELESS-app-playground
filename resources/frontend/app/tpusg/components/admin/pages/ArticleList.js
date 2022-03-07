import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { myPath } from '../../../../routes/path'
const path = myPath.tpusg.admin

export default function ArticleList() {
  const { kind, equipment } = useParams()

  return (
    <div>
      {kind}-{equipment}の記事が一覧表示されるページです。
      {equipment}担当のチームメンバーにのみ表示されます。
      <NavLink to={path.ArticleEditor(kind, equipment, 1)}>
        id=1の記事を編集
      </NavLink>
      <NavLink to={path.NewArticleEditor(kind, equipment)}>
        新規記事追加
      </NavLink>
    </div>
  )
}
