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
        links.map(({ icontype, href, description, text }) => (
          <IconLink
            className={styles.descriptionIconLink}
            key={href}
            icontype={icontype}
            href={href}
            text={text}
            description={description}
          />
        ))}
    </div>
  </section>
)

Descriptor.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  icontype: PropTypes.oneOf(['globe', 'article']),
  href: PropTypes.string,
  text: PropTypes.string,
  description: PropTypes.string
}

export default Descriptor
