import React from 'react'
import PropTypes from 'prop-types'
import * as styles from './navLink.css'

// const NavLink = props => {
//   return <a className={styles.NavLink}>{props.children}</a>
// }

// export default NavLink

class NavLink extends React.Component {
  render() {
    return <a className={styles.NavLink}>{this.props.children}</a>
  }
}

// NavLink.propTypes = {
//   children: React.PropTypes.string
// }

export default NavLink
