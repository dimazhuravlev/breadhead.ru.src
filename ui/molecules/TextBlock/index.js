import React from 'react'
import styles from './textBlock.css'

const TextBlock = props => (
  <div className={styles.textBlock}>
    <div className={styles.textBlockHeader}>{props.header}</div>
    <div className={styles.textBlockContent}>{props.children}</div>
    {props.icon1 &&
      props.icon2 &&
      props.icon3 && (
      <div className={styles.textBlockIcons}>
        <div className={styles.textBlockIcon}>{props.icon1}</div>
        <div className={styles.textBlockIcon}>{props.icon2}</div>
        <div className={styles.textBlockIcon}>{props.icon3}</div>
      </div>
    )}
  </div>
)

export default TextBlock
