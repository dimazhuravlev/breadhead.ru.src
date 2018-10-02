import React from 'react'

import styles from './Button.css'
import cx from 'classnames'

const Button = ({ children, icon, className }) => (
  <button className={cx(styles.Button, className)}>
    {icon}
    <div className={styles.ButtonText}>{children}</div>
  </button>
)

export default Button
