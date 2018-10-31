import React from 'react'
import PropTypes from 'prop-types'
import IconLink from '@site/ui/molecules/IconLink'
import styles from './slideTitleDesktop.css'

const SlideTitleDesktop = ({ title, description, links }) => (
  <article className={styles.slide}>
    {title && <h2 className={styles.title}>{title}</h2>}
    {description && (
      <div className={styles.text}>
        {description.map(text => (
          <div key={text} className={styles.text}>
            {text}
          </div>
        ))}
      </div>
    )}
    <div className={styles.articleIconBlock}>
      {links &&
        links.map(link => (
          <IconLink
            className={styles.articleIconLink}
            key={link.href}
            {...link}
          />
        ))}
    </div>
  </article>
)

SlideTitleDesktop.propTypes = {
  title: PropTypes.string,
  description: PropTypes.arrayOf(PropTypes.string),
  links: PropTypes.arrayOf(PropTypes.object)
}

export default SlideTitleDesktop
