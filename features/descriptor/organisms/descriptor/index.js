import React from 'react'

import IconLink from '@site/ui/molecules/IconLink'
import styles from './descriptor.css'

const Descriptor = props => (
  <div className={styles.descriptor}>
    <div className={styles.descriptorType}>{props.casetype}</div>
    <div className={styles.descriptorName}>{props.casename}</div>
    <IconLink
      tooltip={props.tooltip}
      text={props.text}
      icontype={props.icontype}
      href={props.href}
    />
  </div>
)

export default Descriptor
