import React from 'react'
import PropTypes from 'prop-types'
import Slider from '@site/features/slider'
import Descriptor from '@site/features/descriptor'
import cx from 'classnames'
import * as styles from './case.css'

const Case = ({
  className,
  casetype,
  casename,
  tooltip,
  text,
  icontype,
  href
}) => (
  <section className={cx(styles.case, className)}>
    <Descriptor
      casetype={casetype}
      casename={casename}
      tooltip={tooltip}
      text={text}
      icontype={icontype}
      href={href}
    />
    <Slider />
  </section>
)

Case.propTypes = {
  casetype: PropTypes.string,
  casename: PropTypes.string,
  tooltip: PropTypes.string,
  text: PropTypes.string,
  icontype: PropTypes.string,
  href: PropTypes.string
}

export default Case
