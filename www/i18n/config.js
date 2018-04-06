const { createFilePath } = require('gatsby-source-filesystem')

const languages = [
  {
    code: 'el',
    title: 'Ελληνικά'
  },
  {
    code: 'en',
    title: 'English'
  }
]

const defaultLanguage = 'en'

const cleanSlashes = (path='') => path.replace(/^\/+|\/+$/g, '')

const getI18nPath = ({ langCode, path }) =>
  `/${
    (
     langCode === defaultLanguage ? [ path ] : [ langCode, path ]
    ).map(cleanSlashes).filter(p => !!p).join('/')
  }`

const geti18nFromNode = ({ node, getNode }) => {
  const { fileAbsolutePath } = node
  const filePath = cleanSlashes(createFilePath({ node, getNode }))

  return languages.reduce((m, lang) => {
    const matchLang = filePath.match(new RegExp('\\.' + lang.code + '$', ''), '')
    if (matchLang) {
      m.langCode = lang.code
    }
    if (!m.slug) {
      m.slug = filePath.replace(new RegExp('\\.' + m.langCode + '$', ''), '')
      m.slug = m.slug.replace(/\/index$/, '')
    }
    if (!m.path) {
      m.path = `${ m.langCode }/${ m.slug }`
    }
    console.log('\ngeti18nFromNode', filePath, lang.code, '\n', m)
    return m
  }, {
    slug: null,
    path: null,
    langCode: defaultLanguage,
    filePath,
  })
}

module.exports = {
    defaultLanguage,
    getI18nPath,
    languages,
    geti18nFromNode,
}
