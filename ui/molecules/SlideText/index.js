import React from 'react'
import ReactHtmlParser from 'react-html-parser'
import styles from './slideText.css'
import cx from 'classnames'

const SlideText = ({ description, className }) => {
  return (
    <div className={cx(styles.text, className)}>
      {description &&
        description.map((descriptionItem, i) => (
          <div key={i} className={cx(styles.text, className)}>
            {ReactHtmlParser(descriptionItem)}
          </div>
        ))}
    </div>
  )
}

export default SlideText
