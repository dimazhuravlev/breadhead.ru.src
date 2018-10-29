import React from 'react'
import PropTypes from 'prop-types'
import styles from './navLink.css'

class NavLink extends React.Component {
  render() {
    return (
      <a
        targetscroll={this.props.targetscroll}
        onClick={this.props.onClick}
        className={styles.NavLink}
      >
        {this.props.children}
      </a>
    )
  }
}

NavLink.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func
}

export default NavLink
