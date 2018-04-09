import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'

import Page from '../containers/page'

import { nodeToInstance } from '../utils/edges'

const HomePage = ({ data = {}, pathContext, location }) => {
  const { title, description, html } = nodeToInstance(data.page || {})
  const { landingImage } = data

  return (
    <Page
      title={title}
      description={description}
      pathContext={pathContext}
      location={location}
    >
      <Img {...landingImage.childImageSharp} />
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
    landingImage: file(relativePath: { eq: "images/landing2.jpg" }) {
      childImageSharp {
        sizes(quality: 100, maxWidth: 1500) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`
