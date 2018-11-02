import React from 'react'
import PropTypes from 'prop-types'
import SlideText from '@site/features/slider/molecules/SlideText'
import ArticleIconBlock from '@site/ui/molecules/ArticleIconBlock'
import styles from './slideArticleMobile.css'

const SlideArticleMobile = ({ title, description, links }) => (
  <article className={styles.slide}>
    {title && <h2 className={styles.title}>{title}</h2>}
    <SlideText description={description} className={styles.text} />
    <ArticleIconBlock links={links} />
  </article>
)

SlideArticleMobile.propTypes = {
  title: PropTypes.string,
  description: PropTypes.arrayOf(PropTypes.string),
  links: PropTypes.arrayOf(PropTypes.object)
}

export default SlideArticleMobile
