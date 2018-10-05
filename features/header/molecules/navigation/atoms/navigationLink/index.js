import React from 'react'
import PropTypes from 'prop-types'
import styles from './navLink.css'

const NavLink = props => <a className={styles.NavLink}>{props.children}</a>

NavLink.propTypes = {
  children: PropTypes.string
}

export default NavLink
