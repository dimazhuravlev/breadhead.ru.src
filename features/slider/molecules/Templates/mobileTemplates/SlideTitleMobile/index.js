import React from 'react'
import PropTypes from 'prop-types'
import SlideText from '@site/ui/molecules/SlideText'
import ArticleIconBlock from '@site/ui/molecules/ArticleIconBlock'
import styles from './slideTitleMobile.css'

const SlideTitleMobile = ({ title, description, links, backgroundColor }) => (
  <article
    style={{ backgroundColor: backgroundColor }}
    className={styles.slide}
  >
    {title && <h2 className={styles.title}>{title}</h2>}
    <SlideText description={description} className={styles.text} />
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
  links: PropTypes.arrayOf(PropTypes.object),
  backgroundColor: PropTypes.string,
}

export default SlideTitleMobile
