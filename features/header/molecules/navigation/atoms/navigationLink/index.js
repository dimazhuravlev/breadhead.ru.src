// import PropTypes from 'prop-types'
import * as styles from './navLink.css'

const NavLink = props => {
  return <a className={styles.NavLink}>{props.children}</a>
}

// NavLink.propTypes = {
//   children: PropTypes.element.isRequired
// }

export default NavLink
