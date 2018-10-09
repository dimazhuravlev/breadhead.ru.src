import React from 'react'
import { SlidePicture } from '@site/features/templates'
import styles from './slider.css'
import cx from 'classnames'

const Slider = ({ className }) => (
  <div className={cx(styles.Slider, className)}>
    <SlidePicture />
  </div>
)

export default Slider
