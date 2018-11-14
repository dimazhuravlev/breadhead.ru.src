import React from 'react'
import PropTypes from 'prop-types'

const ExternalLink = ({ children, href, className }) => {
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
}

export default ExternalLink
