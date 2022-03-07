import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { useScrollReset } from './common/hooks/useScrollReset'
import { myPath } from './routes/path'
const path = myPath

import Top from './home/components/pages/Top'
import Auth from './home/components/pages/Auth'
import Profile from './home/components/pages/Profile'

import TpusgTop from './tpusg/components/website/pages/Top'
import Play from './tpusg/components/website/pages/Play'
import Mystery404 from './tpusg/components/website/pages/Mystery404'
import TpusgDashboard from './tpusg/components/admin/pages/Dashboard'
import Login from './tpusg/components/admin/pages/Login'
import MessageBoard from './tpusg/components/admin/pages/MessageBoard'
import CommentList from './tpusg/components/admin/pages/CommentList'
import MyProfileEditor from './tpusg/components/admin/pages/MyProfileEditor'
import ArticleList from './tpusg/components/admin/pages/ArticleList'
import ArticleEditor from './tpusg/components/admin/pages/ArticleEditor'
import NewArticleEditor from './tpusg/components/admin/pages/NewArticleEditor'
import MotiveEditor from './tpusg/components/admin/pages/MotiveEditor'
import MemberManager from './tpusg/components/admin/pages/MemberManager'
import MemberRegister from './tpusg/components/admin/pages/MemberRegister'

import TetcaliTop from './tetcali/components/website/pages/Top'
import TetcaliDashboard from './tetcali/components/admin/pages/Dashboard'

import KaraokeDemo from './ohako/components/pages/Demo'
import KaraokeApp from './ohako/App'

export default function App() {
  useScrollReset()

  return (
    <Routes>
      <Route exact index element={<Top />} />
      <Route path={path.this.Auth} element={<Auth />} />
      <Route path={path.this.Profile()} element={<Profile />} />

      <Route path={path.tpusg.Top} element={<TpusgTop />} />
      <Route path={path.tpusg.Play()} element={<Play />} />

      <Route path={path.tpusg.admin.Dashboard} element={<TpusgDashboard />} />
      <Route path={path.tpusg.admin.Login} element={<Login />} />
      <Route path={path.tpusg.admin.MessageBoard} element={<MessageBoard />} />
      <Route
        path={path.tpusg.admin.MyProfileEditor()}
        element={<MyProfileEditor />}
      />
      <Route path={path.tpusg.admin.CommentList} element={<CommentList />} />
      <Route path={path.tpusg.admin.ArticleList()} element={<ArticleList />} />
      <Route
        path={path.tpusg.admin.ArticleEditor()}
        element={<ArticleEditor />}
      />
      <Route
        path={path.tpusg.admin.NewArticleEditor()}
        element={<NewArticleEditor />}
      />
      <Route path={path.tpusg.admin.MotiveEditor} element={<MotiveEditor />} />
      <Route
        path={path.tpusg.admin.MemberManager}
        element={<MemberManager />}
      />
      <Route
        path={path.tpusg.admin.MemberRegister}
        element={<MemberRegister />}
      />

      <Route path={path.tetcali.Top} element={<TetcaliTop />} />

      <Route
        path={path.tetcali.admin.Dashboard}
        element={<TetcaliDashboard />}
      />

      <Route path={path.karaoke.Demo} element={<KaraokeDemo />} />
      <Route path={path.karaoke.admin.Top()} element={<KaraokeApp />} />

      <Route path="*" element={<Mystery404 />} />
    </Routes>
  )
}
