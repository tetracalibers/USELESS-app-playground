import React from 'react'
import { NavLink } from 'react-router-dom'
import { myPath } from '../../../../routes/path'
const path = myPath.tpusg.admin

export default function TpusgDashboard() {
  return (
    <div>
      管理画面のダッシュボードです。 メモアプリとしても使えます。
      チームメンバーにのみ表示されます。
      <nav>
        <NavLink to={path.MessageBoard}>伝言板</NavLink>
        <NavLink to={path.MyProfileEditor('tomixy')}>プロフィール編集</NavLink>
        <NavLink to={path.CommentList}>コメント一覧</NavLink>
        <NavLink to={path.ArticleList('play', 'guitar')}>
          演奏法解説 - Guitar編
        </NavLink>
        <NavLink to={path.ArticleList('play', 'bass')}>
          演奏法解説 - Bass編
        </NavLink>
        <NavLink to={path.ArticleList('play', 'drums')}>
          演奏法解説 - Drums編
        </NavLink>
        <NavLink to={path.ArticleList('equipment', 'guitar')}>
          機材解説 - Guitar編
        </NavLink>
        <NavLink to={path.ArticleList('equipment', 'bass')}>
          機材解説 - Bass編
        </NavLink>
        <NavLink to={path.ArticleList('equipment', 'drums')}>
          機材解説 - Drums編
        </NavLink>
        <NavLink to={path.MotiveEditor}>MOTIVE編集</NavLink>
        <NavLink to={path.MemberManager}>メンバー管理</NavLink>
      </nav>
    </div>
  )
}
