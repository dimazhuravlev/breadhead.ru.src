import React from 'react'
import PropTypes from 'prop-types'
import ArticleIconBlock from '@site/ui/molecules/ArticleIconBlock'
import styles from './slideArticleDesktop.css'
import SlideText from '@site/ui/molecules/SlideText'

const SlideArticleDesktop = ({
  title,
  description,
  links,
  backgroundColor,
}) => (
  <article
    style={{ backgroundColor: backgroundColor }}
    className={styles.slide}
  >
    {title && <h2 className={styles.title}>{title}</h2>}
    <SlideText description={description} />
    <ArticleIconBlock links={links} />
  </article>
)

SlideArticleDesktop.propTypes = {
  title: PropTypes.string,
  description: PropTypes.arrayOf(PropTypes.string),
  links: PropTypes.arrayOf(PropTypes.object),
  backgroundColor: PropTypes.string,
}

export default React.memo(SlideArticleDesktop)
