import React from 'react'
import Slider from '@site/features/slider'
import Descriptor from '@site/features/descriptor'
import * as styles from './case.css'

const Case = props => (
  <div className={styles.case}>
    <Descriptor
      casetype={props.casetype}
      casename={props.casename}
      tooltip={props.tooltip}
      text={props.text}
      icontype={props.icontype}
      href={props.href}
    />

    <Slider />
  </div>
)

export default Case
