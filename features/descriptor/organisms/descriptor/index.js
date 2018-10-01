import React from 'react'

import IconLink from '@site/ui/molecules/IconLink'
import styles from './descriptor.css'

const Descriptor = props => (
  <div className={styles.descriptor}>
    {props.casetype && (
      <div className={styles.descriptorType}>{props.casetype}</div>
    )}
    <div className={styles.descriptorName}>{props.casename}</div>
    {props.icontype && (
      <IconLink
        icontype={props.icontype}
        href={props.href}
        tooltip={props.tooltip}
        text={props.text}
      />
    )}
  </div>
)

export default Descriptor
