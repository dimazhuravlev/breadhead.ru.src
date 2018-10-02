import React from 'react'
import PropTypes from 'prop-types'
import Slider from '@site/features/slider'
import Descriptor from '@site/features/descriptor'
import * as styles from './case.css'

const Case = props => (
  <section className={styles.case}>
    <Descriptor
      casetype={props.casetype}
      casename={props.casename}
      tooltip={props.tooltip}
      text={props.text}
      icontype={props.icontype}
      href={props.href}
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
