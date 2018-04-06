/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// Created translated version of existing layouts
exports.onCreateLayout = ({ layout, graphql, boundActionCreators, getNode }, { languages }) => {
  const { createLayout, deleteLayout } = boundActionCreators

  const newLayouts = languages.map(({ code }) => ({
      ...layout,
      id: `${ code }--${ layout.id }`,
      context: {
        langCode: code,
      }
  })).map(layout => {
    createLayout(layout)
    return layout
  })

  console.log('\nonCreateLayout', layout, newLayouts.map(l => l.id))
}

// Create translated version of existing pages.
// For each existing page create a version for each language
// (under /<landCode>/<page.path>)
// and add a redirect from /<page.path> to the default language
exports.onCreatePage = ({ page, boundActionCreators, ...props }, { languages, getI18nPath }) => {
  const { createPage, deletePage, createRedirect } = boundActionCreators

  // Some pages don't need translating
  if (page.path.match(/dev-404/)) {
    return
  }

  const { path, layout } = page
  const newPage = { ...page }

  deletePage(page)

  const newPages = languages.map(({ code }) => ({
    ...newPage,
    path: getI18nPath({ langCode: code, path }),
    layout: `${ code }--${ layout }`,
    context: {
      langCode: code,
    }
  })).map(page => {
    createPage(page)
    return page
  })

  console.warn('\nonCreatePage', path, newPages.map(p => p.path))

}

exports.onCreateNode = ({ node, graphql, boundActionCreators, getNode }, { geti18nFromNode }) => {
  const { createNode, createNodeField } = boundActionCreators

  if (node.internal.type === 'MarkdownRemark') {
    const { path, slug, langCode } = geti18nFromNode({ node, getNode })

    // add slug
    if (slug) {
      createNodeField({
        node,
        name: 'slug',
        value: slug
      })
    }

    // add language field
    if (langCode) {
      createNodeField({
        node,
        name: 'langCode',
        value: langCode
      })
    }

    console.log('\nonCreate Markdown', { path, langCode, slug })
  }
}
