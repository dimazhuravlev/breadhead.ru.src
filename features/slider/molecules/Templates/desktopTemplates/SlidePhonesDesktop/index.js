import React from 'react'
import PropTypes from 'prop-types'
import styles from './slidePhonesDesktop.css'
import cx from 'classnames'

const SlidePhonesDesktop = ({ srcLeft, srcCenter, srcRight }) => (
  <div className={styles.slide}>
    <div className={styles.phones}>
      <div className={cx(styles.phone, styles.phone1)}>
        <img src={srcLeft} className={styles.screen} />
      </div>
      <div className={cx(styles.phone, styles.phone2)}>
        <img src={srcCenter} className={styles.screen} />
      </div>
      <div className={cx(styles.phone, styles.phone3)}>
        <img src={srcRight} className={styles.screen} />
      </div>
    </div>
  </div>
)

SlidePhonesDesktop.propTypes = {
  srcLeft: PropTypes.string.isRequired,
  srcCenter: PropTypes.string.isRequired,
  srcRight: PropTypes.string.isRequired
}

export default SlidePhonesDesktop
