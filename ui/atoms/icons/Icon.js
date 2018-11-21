import React from 'react'
import styles from './Icon.css'
import cx from 'classnames'

const Icon = ({ name, className }) => (
  <svg width="30px" height="30px" className={cx(styles[name], className)}>
    <use xlinkHref={`#icon-${name}`} />
  </svg>
)

export default Icon
