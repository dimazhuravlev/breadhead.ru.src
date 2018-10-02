import React from 'react'
import PropTypes from 'prop-types'
import styles from './textBlock.css'
import cx from 'classnames'

const TextBlock = ({ className, header, children, icons }) => (
  <section className={cx(styles.textBlock, className)}>
    <div className={styles.textBlockHeader}>{header}</div>
    <div className={styles.textBlockContent}>{children}</div>
    {icons && <div className={styles.icons}>{icons}</div>}
  </section>
)

TextBlock.propTypes = {
  header: PropTypes.string,
  icons: PropTypes.object
}

export default TextBlock
