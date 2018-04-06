import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Page from '../containers/page'

import { nodeToInstance } from '../utils/edges'

const Banner = styled.div`
  .gatsby-resp-image-wrapper {
    max-width: 100% !important;
  }
`

const HomePage = ({ data = {}, pathContext, location }) => {
  const { title, description, html } = nodeToInstance(data.page || {})
  return (
    <Page
      title={title}
      description={description}
      pathContext={pathContext}
      location={location}
    >
      <Banner dangerouslySetInnerHTML={{ __html: html }} />
    </Page>
  )
}

export default HomePage

export const HomeQuery = graphql`
  query Home($langCode: String!) {
    page: markdownRemark(
      fields: { slug: { eq: "landing" }, langCode: { eq: $langCode } }
    ) {
      html
      frontmatter {
        title
        description
      }
    }
  }
`
