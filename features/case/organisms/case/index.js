import React from 'react'
import Slider from '@site/features/slider'
import Descriptor from '@site/features/descriptor'
import * as styles from './case.css'

const Case = () => (
  <div className={styles.Case}>
    <Descriptor />
    <Slider />
  </div>
)

export default Case
