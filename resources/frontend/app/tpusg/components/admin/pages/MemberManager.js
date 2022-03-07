import React from 'react'
import { NavLink } from 'react-router-dom'
import { myPath } from '../../../../routes/path'
const path = myPath.tpusg.admin

export default function MemberManager() {
  return (
    <div>
      ユーザ管理を行うページです。 管理者のみアクセスできます。
      <NavLink to={path.MemberRegister}>新規メンバー追加</NavLink>
    </div>
  )
}
