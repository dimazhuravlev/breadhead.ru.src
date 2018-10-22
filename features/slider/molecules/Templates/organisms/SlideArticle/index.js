import React from 'react'
import IconLink from '@site/ui/molecules/IconLink'
import styles from './slideArticle.css'

const SlideArticle = ({ title, description, links }) => (
  <article className={styles.slide}>
    {title && <h2 className={styles.title}>{title}</h2>}
    <div className={styles.text}>
      {description &&
        description.map(text => (
          <div key={description} className={styles.text}>
            {text}
          </div>
        ))}
    </div>
    <div className={styles.articleIconBlock}>
      {links &&
        links.map(links => (
          <IconLink
            key={links.href}
            className={styles.articleIconLink}
            {...links}
          />
        ))}
    </div>
  </article>
)

export default SlideArticle
