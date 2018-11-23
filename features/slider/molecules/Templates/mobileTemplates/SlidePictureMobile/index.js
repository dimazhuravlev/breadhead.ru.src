import React from 'react'
import PropTypes from 'prop-types'
import { shouldUpdate } from 'recompose'
import Img from '@site/ui/molecules/Img'
import styles from './slidePictureMobile.css'

const SlidePictureMobile = ({ image: { src, preloader } }) => (
  <Img src={src} className={styles.picture} preloader={preloader} />
)

SlidePictureMobile.propTypes = {
  src: PropTypes.string.isRequired,
}

export default shouldUpdate(() => false)(SlidePictureMobile)
