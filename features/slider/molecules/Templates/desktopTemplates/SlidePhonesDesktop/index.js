import React from 'react'
import PropTypes from 'prop-types'
import styles from './slidePhonesDesktop.css'

const SlidePhonesDesktop = ({ srcLeft, srcCenter, srcRight }) => (
  <div className={styles.slide}>
    <div className={styles.phones}>
      <div className={styles.phone}>
        <img src={srcLeft} className={styles.screen} />
      </div>
      <div className={styles.phone}>
        <img src={srcCenter} className={styles.screen} />
      </div>
      <div className={styles.phone}>
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
