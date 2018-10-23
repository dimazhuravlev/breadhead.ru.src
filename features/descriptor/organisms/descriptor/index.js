import React from 'react'
import PropTypes from 'prop-types'
import IconLink from '@site/ui/molecules/IconLink'
import cx from 'classnames'
import styles from './descriptor.css'

const Descriptor = ({ className, type, name, links }) => (
  <section className={cx(styles.descriptor, className)}>
    {type && <p className={styles.type}>{type}</p>}
    <h2 className={styles.name}>{name}</h2>
    <div className={styles.descriptorIconBlock}>
      {links &&
        links.map(link => (
          <IconLink
            {...link}
            key={link.href}
            className={styles.descriptionIconLink}
          />
        ))}
    </div>
  </section>
)

Descriptor.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.object)
}

export default Descriptor
