import React from 'react'
import IconLink from '@site/ui/molecules/IconLink'
import styles from './slideTitle.css'

const SlideTitle = ({ title, description, links }) => (
  <article className={styles.slide}>
    {title && <h2 className={styles.title}>{title}</h2>}
    <div className={styles.text}>
      {description &&
        description.map(description => (
          <div key={description} className={styles.text}>
            {description}
          </div>
        ))}
    </div>
    <div className={styles.articleIconBlock}>
      {links &&
        links.map(({ icontype, href, description, text }) => (
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

export default SlideTitle
