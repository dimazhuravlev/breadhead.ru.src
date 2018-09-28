import React from 'react'

import styles from './Button.css'

const Button = props => (
  <button className={styles.Button}>
    {props.icon}
    <div className={styles.ButtonText}>{props.children}</div>
  </button>
)

export default Button
