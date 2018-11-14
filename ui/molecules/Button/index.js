import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.css'
import cx from 'classnames'

const Button = React.forwardRef((props, ref) => (
  <button
    style={props}
    ref={ref}
    name={props.name}
    onClick={props.onClick}
    className={cx(styles.Button, props.className)}
  >
    {props.icon}
    <p className={styles.ButtonText}>{props.children}</p>
  </button>
))

Button.propTypes = {
  children: PropTypes.string,
  icon: PropTypes.object
}

export default Button
