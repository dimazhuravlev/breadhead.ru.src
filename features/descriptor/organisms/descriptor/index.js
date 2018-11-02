import React from 'react'
import PropTypes from 'prop-types'
import ArticleIconBlock from '@site/ui/molecules/ArticleIconBlock'
import cx from 'classnames'
import styles from './descriptor.css'

const Descriptor = ({ className, type, name, links }) => (
  <section className={cx(styles.descriptor, className)}>
    {type && <p className={styles.type}>{type}</p>}
    <h2 className={styles.name}>{name}</h2>
    <ArticleIconBlock
      links={links}
      classNameIcon={styles.articleIconLink}
      classNameBlock={styles.articleIconBlock}
    />
  </section>
)

Descriptor.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.object)
}

export default Descriptor
