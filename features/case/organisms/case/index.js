import React from 'react'
import PropTypes from 'prop-types'
import Slider from '@site/features/slider'
import Descriptor from '@site/features/descriptor'
import cx from 'classnames'
import styles from './case.css'

const Case = ({
  className,
  id,
  type,
  name,
  text,
  icontype,
  href,
  description,
  data
}) => (
  <section id={id} className={cx(styles.case, className)}>
    <Descriptor
      type={type}
      name={name}
      text={text}
      icontype={icontype}
      href={href}
      description={description}
    />
    <Slider data={data} />
  </section>
)

Case.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  text: PropTypes.string,
  icontype: PropTypes.string,
  href: PropTypes.string,
  description: PropTypes.string
}

export default Case
