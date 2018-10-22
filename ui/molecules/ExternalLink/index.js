import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const ExternalLink = ({ children, href, className }) => {
  return (
    <a
      href={href}
      className={cx(className)}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired
}

export default ExternalLink
