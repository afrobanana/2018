import React from 'react'
import styled from 'styled-components'

const Copyright = styled.p`
  font-size: 0.8rem;
  text-align: center;
  color: #ccc;
`

export default () => (
  <Copyright>
    Copyright &copy; {new Date().getUTCFullYear()} Alternative Brains Rule
  </Copyright>
)
