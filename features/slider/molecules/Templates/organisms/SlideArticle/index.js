import React from 'react'
import IconLink from '@site/ui/molecules/IconLink'
import styles from './slideArticle.css'

const SlideArticle = ({ title, description, links }) => (
  <article className={styles.slide}>
    <h2 className={styles.title}>{title}</h2>
    <div className={styles.text}>
      {description.map(description => (
        <div key={description} className={styles.text}>
          {description}
        </div>
      ))}
    </div>
    <div className={styles.articleIconBlock}>
      {links.map(({ icontype, href, description, text }) => (
        <IconLink
          className={styles.articleIconLink}
          key={href}
          icontype={icontype}
          href={href}
          text={text}
          description={description}
        />
      ))}
    </div>
  </article>
)

export default SlideArticle
