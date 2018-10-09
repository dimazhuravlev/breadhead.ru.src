import React from 'react'
import PropTypes from 'prop-types'
import Slider from '@site/features/slider'
import Descriptor from '@site/features/descriptor'
import cx from 'classnames'
import styles from './case.css'

const Case = ({ className, id, type, name, tooltip, text, icontype, href }) => (
  <section id={id} className={cx(styles.case, className)}>
    <Descriptor
      type={type}
      name={name}
      tooltip={tooltip}
      text={text}
      icontype={icontype}
      href={href}
    />
    <Slider />
  </section>
)

Case.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  tooltip: PropTypes.string,
  text: PropTypes.string,
  icontype: PropTypes.string,
  href: PropTypes.string
}

export default Case
