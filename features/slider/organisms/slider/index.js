import React from 'react'
// import { SlidePicture } from '@site/features/templates'
import { SlideBrowserPicture } from '@site/features/templates'
import styles from './slider.css'
import cx from 'classnames'

const Slider = ({ className }) => (
  <div className={cx(styles.Slider, className)}>
    <SlideBrowserPicture />
  </div>
)

export default Slider
