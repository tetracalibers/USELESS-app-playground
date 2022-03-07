const prefix = {
  tpusg: 'tpusg',
  tpusgAdmin: 'tpusg/cms',
  tetcali: 'tetcali',
  tetcaliAdmin: 'tetcali/cms',
  karaoke: 'ohakomaker',
}

export const myPath = {
  this: {
    Top: '/',
    Auth: '/login',
    Profile: (userid = ':userid') => `/profile/${userid}`,
  },

  tpusg: {
    Top: `${prefix.tpusg}`,
    Play: (song = ':song', equipment = ':equipment') =>
      `${prefix.tpusg}/play/${song}/${equipment}`,
    admin: {
      Dashboard: `${prefix.tpusgAdmin}`,
      Login: `${prefix.tpusgAdmin}/login`,
      MessageBoard: `${prefix.tpusgAdmin}/message-board`,
      MyProfileEditor: (user = ':user') =>
        `${prefix.tpusgAdmin}/profile/${user}`,
      CommentList: `${prefix.tpusgAdmin}/comment`,
      ArticleList: (kind = ':kind', equipment = ':equipment') =>
        `${prefix.tpusgAdmin}/articles/${kind}/${equipment}`,
      ArticleEditor: (kind = ':kind', equipment = ':equipment', id = ':id') =>
        `${prefix.tpusgAdmin}/articles/${kind}/${equipment}/edit/${id}`,
      NewArticleEditor: (kind = ':kind', equipment = ':equipment') =>
        `${prefix.tpusgAdmin}/articles/${kind}/${equipment}/newpost`,
      MotiveEditor: `${prefix.tpusgAdmin}/concepter/motive/edit`,
      MemberManager: `${prefix.tpusgAdmin}/administrator/members`,
      MemberRegister: `${prefix.tpusgAdmin}/administrator/members/add`,
    },
  },

  tetcali: {
    Top: `${prefix.tetcali}`,
    admin: {
      Dashboard: `${prefix.tetcaliAdmin}`,
    },
  },

  karaoke: {
    Demo: `${prefix.karaoke}/demo`,
    admin: {
      Top: (userId = ':userid') => `${prefix.karaoke}/${userId}`,
    },
  },
}
