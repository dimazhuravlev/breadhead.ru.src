import React from 'react'
import PropTypes from 'prop-types'

// const ExternalLink = ({ children, href, className }) =>
class ExternalLink extends React.Component {
  onClick = e => {
    e.stopPropagation()
  }
  render() {
    const { children, href, className } = this.props
    return (
      <a
        href={href}
        onClick={this.onClick}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    )
  }
}

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired
}

export default ExternalLink
