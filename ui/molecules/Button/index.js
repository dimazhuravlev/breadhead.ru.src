import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.css'
import cx from 'classnames'

const Button = ({ children, icon, className }) => (
  <button className={cx(styles.Button, className)}>
    {icon}
    <div className={styles.ButtonText}>{children}</div>
  </button>
)

Button.propTypes = {
  children: PropTypes.string,
  icon: PropTypes.object
}

export default Button
