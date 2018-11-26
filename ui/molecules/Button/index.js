import React from 'react'
import styles from './Button.css'
import cx from 'classnames'

const Button = React.forwardRef(
  ({ name, children, className, icon, onClick, style }, ref) => (
    <button
      style={style}
      ref={ref}
      name={name}
      onClick={onClick}
      className={cx(styles.Button, className)}
    >
      {icon}
      <p className={styles.ButtonText}>{children}</p>
    </button>
  )
)

export default Button
