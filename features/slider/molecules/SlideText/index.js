import React from 'react'
import styles from './slideText.css'
import cx from 'classnames'

const SlideText = ({ description, className }) => {
  return (
    <div className={cx(styles.text, className)}>
      {description &&
        description.map(text => (
          <div key={text} className={cx(styles.text, className)}>
            {text}
          </div>
        ))}
    </div>
  )
}

export default SlideText
