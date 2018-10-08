import React from 'react'
import PropTypes from 'prop-types'
import styles from './navLink.css'

class NavLink extends React.Component {
  constructor() {
    super()
    this.boundHandleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const target = document.getElementById(this.props.linkId)
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  render() {
    return (
      <a
        linkid={this.props.linkId}
        onClick={this.boundHandleClick}
        className={styles.NavLink}
      >
        {this.props.children}
      </a>
    )
  }
}

NavLink.propTypes = {
  children: PropTypes.string
}

export default NavLink
