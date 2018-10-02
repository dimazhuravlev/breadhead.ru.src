import React from 'react'
import styles from './textBlock.css'

const TextBlock = props => (
  <div className={styles.textBlock}>
    <div className={styles.textBlockHeader}>{props.header}</div>
    <div className={styles.textBlockContent}>{props.children}</div>
    <div className={styles.textBlockIcons} />
  </div>
)

export default TextBlock
