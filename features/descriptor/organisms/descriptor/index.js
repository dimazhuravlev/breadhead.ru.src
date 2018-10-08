import React from 'react'
import PropTypes from 'prop-types'
import IconLink from '@site/ui/molecules/IconLink'
import cx from 'classnames'
import styles from './descriptor.css'

const Descriptor = ({
  type,
  name,
  icontype,
  href,
  tooltip,
  text,
  className
}) => (
  <section className={cx(styles.descriptor, className)}>
    {type && <p className={styles.type}>{type}</p>}
    <h2 className={styles.name}>{name}</h2>
    {icontype && (
      <IconLink icontype={icontype} href={href} tooltip={tooltip} text={text} />
    )}
  </section>
)

Descriptor.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  icontype: PropTypes.oneOf(['globe', 'article']),
  href: PropTypes.string,
  tooltip: PropTypes.string,
  text: PropTypes.string
}

export default Descriptor
