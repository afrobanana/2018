import React from 'react'
import styled from 'styled-components'

import fbImg from './fb.svg'
import twitterImg from './twitter.svg'
import instagramImg from './instagram.svg'

const Container = styled.span`
  text-align: center;
  display: block;
  margin: 6vw auto;

  a[href] {
    display: inline-block;
    margin: 0 2vw;
  }
`

export default ({ facebook = '#', twitter = '#', instagram = '#' }) => (
  <Container>
    <a href={facebook} target="_blank" rel="noreferrer">
      <img src={fbImg} />
    </a>
    <a href={twitter} target="_blank" rel="noreferrer">
      <img src={twitterImg} />
    </a>
    <a href={instagram} target="_blank" rel="noreferrer">
      <img src={instagramImg} />
    </a>
  </Container>
)
