import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import NewsletterSignup from '../components/newsletter-signup'
import Copyright from '../components/copyright'
import Social from '../components/social'

import {
  facebookURL,
  twitterURL,
  instagramURL,
  newsletterSignUpURL,
} from '../config'

const Page = ({
  title,
  description,
  children,
  pathContext,
  location,
  className,
}) => (
  <div className={className}>
    <Helmet
      title={title || undefined}
      meta={[{ name: 'description', content: description || undefined }]}
    />
    {children}
    <footer>
      <Social
        facebook={facebookURL}
        twitter={twitterURL}
        instagram={instagramURL}
      />
      <NewsletterSignup action={newsletterSignUpURL} />
      <Copyright />
    </footer>
  </div>
)

export default Page
