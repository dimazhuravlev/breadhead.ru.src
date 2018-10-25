import React from 'react'
import PropTypes from 'prop-types'
import styles from './slidePhones.css'
import cx from 'classnames'

const SlidePhones = ({ srcMobileLeft, srcMobileCenter, srcMobileRight }) => (
  <div className={styles.slide}>
    <div className={styles.phones}>
      <div className={cx(styles.phone, styles.phone1)}>
        <img src={srcMobileLeft} className={styles.screen} />
      </div>
      <div className={cx(styles.phone, styles.phone2)}>
        <img src={srcMobileCenter} className={styles.screen} />
      </div>
      <div className={cx(styles.phone, styles.phone3)}>
        <img src={srcMobileRight} className={styles.screen} />
      </div>
    </div>
  </div>
)

SlidePhones.propTypes = {
  srcMobileLeft: PropTypes.string.isRequired,
  srcMobileCenter: PropTypes.string.isRequired,
  srcMobileRight: PropTypes.string.isRequired
}

export default SlidePhones
