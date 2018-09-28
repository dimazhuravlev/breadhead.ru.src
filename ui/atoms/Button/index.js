import React from 'react'

import styles from './Button.css'
import { ZipIcon } from '@site/ui/molecules/Icons'
// import { PlusIcon } from '@site/ui/molecules/Icons'

const Button = props => (
  <button className={styles.Button}>
    {props.icon}
    <div className={styles.ButtonText}>{props.value}</div>
  </button>
)

/* 
<Button icon={<Icon/>}>Связь</Button>
*/
export default Button
