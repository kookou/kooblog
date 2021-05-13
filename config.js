module.exports = {
  url: 'https://gatsby-starter-blog-and-cv.netlify.app',
  pathPrefix: '/',
  title: 'Blog by Park Hye Jung',
  keywords:
    'account surfer, trello bookmark, trello, productivity, javascript, Marat Dospolov, choosy windows, browser selector',
  subtitle: '초보 개발자',
  copyright: '© 2020 | Kyiv, Ukraine',
  disqusShortname: 'kooblog',
  postsPerPage: 20,
  googleAnalyticsId: 'UA-6589522-7',
  menu: [
    {
      label: 'Blog',
      path: '/'
    },
    {
      label: 'CV',
      path: '/cv'
    }
  ],
  author: {
    name: 'Park Hye Jung',
    photo: '/imoge.jpg',
    bio: '초보 개발자',
    contacts: {
      // don't remove fields, just make them empty string ''
      // https://github.com/gatsbyjs/gatsby/issues/2392
      github: 'kookou',
      twitter: 'marat_dospolov',
      linkedin: 'dospolov',
      telegram: 'dospolov',
      instagram: 'dospolov',
      facebook: 'dospolov',
      email: 'nnaangee@gmail.com',
      rss: '/rss.xml'
    }
  }
}
