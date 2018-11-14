import React from 'react'
import PropTypes from 'prop-types'
import SlideText from '@site/ui/molecules/SlideText'
import ArticleIconBlock from '../../../ArticleIconBlock'
import styles from './slideNavMobile.css'

const SlideNavMobile = ({
  title,
  description,
  links,
  backgroundColor,
  onLinkClick,
}) => (
  <article
    style={{ backgroundColor: backgroundColor }}
    className={styles.slide}
  >
    {title && <h2 className={styles.title}>{title}</h2>}
    <SlideText description={description} />
    <ArticleIconBlock
      onLinkClick={onLinkClick}
      links={links}
      classNameIcon={styles.articleIconLink}
      classNameBlock={styles.articleIconBlock}
    />
  </article>
)

SlideNavMobile.propTypes = {
  onLinkClick: PropTypes.func,
  title: PropTypes.string,
  description: PropTypes.arrayOf(PropTypes.string),
  links: PropTypes.arrayOf(PropTypes.object),
  backgroundColor: PropTypes.string,
}

export default React.memo(SlideNavMobile)
