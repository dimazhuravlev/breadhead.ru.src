import React from 'react'
import PropTypes from 'prop-types'
import Slider from '@site/features/slickSlider'
import Descriptor from '@site/features/descriptor'
import cx from 'classnames'
import styles from './case.css'

const Case = ({ name, className, description, slides }) => (
  <section name={name} className={cx(styles.case, className)}>
    <Descriptor {...description} />
    <div className={styles.sliderWrapper}>
      <Slider slides={slides} />
    </div>
  </section>
)

Case.propTypes = {
  description: PropTypes.object.isRequired,
  slides: PropTypes.arrayOf(PropTypes.object),
}

export default Case
