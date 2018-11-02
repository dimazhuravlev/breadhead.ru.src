import React from 'react'
import PropTypes from 'prop-types'
import ArticleIconBlock from '@site/ui/molecules/ArticleIconBlock'
import styles from './slideArticleWithPhoneDesktop.css'

const SlideArticleWithPhoneDesktop = ({ title, description, links, src }) => (
  <React.Fragment>
    <div className={styles.wrapper}>
      <article className={styles.article}>
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
        <ArticleIconBlock links={links} />
      </article>
      <div className={styles.phone}>
        <img src={src} className={styles.screen} />
      </div>
    </div>
  </React.Fragment>
)

SlideArticleWithPhoneDesktop.propTypes = {
  title: PropTypes.string,
  description: PropTypes.arrayOf(PropTypes.string),
  links: PropTypes.arrayOf(PropTypes.object),
  src: PropTypes.string.isRequired
}

export default SlideArticleWithPhoneDesktop
