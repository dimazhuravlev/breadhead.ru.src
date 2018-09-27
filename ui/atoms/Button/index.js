import React from 'react'

import { ZipIcon } from '@site/ui/molecules/Icons'

import styles from './Button.css'

const Button = () => (
  <button className={styles.Button}>
    <ZipIcon className={styles.ButtonIcon} />
    <div className={styles.ButtonText}>cвязь</div>
  </button>
)

export default Button
