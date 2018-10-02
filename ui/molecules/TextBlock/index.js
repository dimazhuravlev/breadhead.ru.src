import React from 'react'
import styles from './textBlock.css'
import cx from 'classnames'

const TextBlock = ({ className, header, children, icons }) => (
  <div className={cx(styles.textBlock, className)}>
    <div className={styles.textBlockHeader}>{header}</div>
    <div className={styles.textBlockContent}>{children}</div>
    {icons && <div className={styles.icons}>{icons}</div>}
  </div>
)

export default TextBlock
