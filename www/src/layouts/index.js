import React from 'react'
import PropTypes from 'prop-types'

import '../styles'

const TemplateWrapper = ({ children }) => children()

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
