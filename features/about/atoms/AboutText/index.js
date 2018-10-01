import React from 'react'
import styles from './aboutText.css'

const AboutText = props => (
  <div className={styles.aboutText}>{props.children}</div>
)

export default AboutText
