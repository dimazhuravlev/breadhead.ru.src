import React from 'react'

import styles from './Button.css'
import { ZipIcon } from '@site/ui/molecules/Icons'
// import { PlusIcon } from '@site/ui/molecules/Icons'

const Button = props => (
  <button className={styles.Button}>
    <div>{props.icon}</div>
    <ZipIcon className={styles.ButtonIcon} />
    <div className={styles.ButtonText}>{props.value}</div>
  </button>
)

export default Button
