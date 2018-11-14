import React from 'react'
import PropTypes from 'prop-types'
import SlideText from '@site/features/slider/molecules/SlideText'
import ArticleIconBlock from '@site/ui/molecules/ArticleIconBlock'
import styles from './slideTitleDesktop.css'

const SlideTitleDesktop = ({ title, description, links, backgroundColor }) => (
  <article
    style={{ backgroundColor: backgroundColor }}
    className={styles.slide}
  >
    {title && <h2 className={styles.title}>{title}</h2>}
    <SlideText description={description} />
    <ArticleIconBlock
      links={links}
      classNameIcon={styles.articleIconLink}
      classNameBlock={styles.articleIconBlock}
    />
  </article>
)

SlideTitleDesktop.propTypes = {
  title: PropTypes.string,
  description: PropTypes.arrayOf(PropTypes.string),
  links: PropTypes.arrayOf(PropTypes.object),
  backgroundColor: PropTypes.string,
}

export default SlideTitleDesktop
