import React from 'react'
import PropTypes from 'prop-types'
import ArticleIconBlock from '@site/ui/molecules/ArticleIconBlock'
import styles from './slideTitleMobile.css'

const SlideTitleMobile = ({ title, description, links }) => (
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
    <ArticleIconBlock
      links={links}
      classNameIcon={styles.articleIconLink}
      classNameBlock={styles.articleIconBlock}
    />
  </article>
)

SlideTitleMobile.propTypes = {
  title: PropTypes.string,
  description: PropTypes.arrayOf(PropTypes.string),
  links: PropTypes.arrayOf(PropTypes.object)
}

export default SlideTitleMobile
