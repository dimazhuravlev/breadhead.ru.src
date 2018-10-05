import React from 'react'
import PropTypes from 'prop-types'
import IconLink from '@site/ui/molecules/IconLink'
import styles from './descriptor.css'

const Descriptor = ({ casetype, casename, icontype, href, tooltip, text }) => (
  <section className={styles.descriptor}>
    {casetype && <p className={styles.descriptorType}>{casetype}</p>}
    <h2 className={styles.descriptorName}>{casename}</h2>
    {icontype && (
      <IconLink icontype={icontype} href={href} tooltip={tooltip} text={text} />
    )}
  </section>
)

Descriptor.propTypes = {
  casetype: PropTypes.string,
  casename: PropTypes.string.isRequired,
  icontype: PropTypes.oneOf(['globe', 'article']),
  href: PropTypes.string,
  tooltip: PropTypes.string,
  text: PropTypes.string
}

export default Descriptor
