import { generateDeepLink } from './generate.js'

const BUZZ_APP_ID = 'znf9fpiMh6ufdU3vDtAvi4'

export default {
  profile(uid) {
    return generateDeepLink({
      appId: BUZZ_APP_ID,
      startPagePath: 'pages/buzz-profile/index',
      startPageQuery: `uid=${uid}`,
    })
  },
  post(id) {
    return generateDeepLink({
      appId: BUZZ_APP_ID,
      startPagePath: 'pages/bits-buzz/index',
      startPageQuery: `postId=${id}`,
    })
  },
  article(id) {
    return generateDeepLink({
      appId: BUZZ_APP_ID,
      startPagePath: 'pages/article-buzz/index',
      startPageQuery: `articleId=${id}`,
    })
  },
}
