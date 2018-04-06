import './bootstrap-4.0.0.min.css'

import React from 'react'
import PropTypes from 'prop-types'
import { injectGlobal } from 'styled-components'

import { dark } from '../theme'

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Baloo+Bhaina|Roboto:300,400');

  body {
    background-color: ${dark};
    color: #eee;
    font-family: Roboto, "Helvetica Neue", sans-serif;
  }

  img {
    max-width: 100%;
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: 'Baloo Bhaina', cursive;
  }
`

const TemplateWrapper = ({ children }) => children()

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
