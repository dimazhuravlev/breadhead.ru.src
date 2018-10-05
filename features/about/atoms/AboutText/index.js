import React from 'react'
import PropTypes from 'prop-types'
import styles from './aboutText.css'

const AboutText = props => <p className={styles.aboutText}>{props.children}</p>

AboutText.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
}

export default AboutText
