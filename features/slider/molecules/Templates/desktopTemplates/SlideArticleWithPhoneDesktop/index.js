import React from 'react'
import { compose, onlyUpdateForKeys } from 'recompose'
import PreloadableImage from '@site/ui/molecules/PreloadableImage'
import SlideText from '@site/ui/molecules/SlideText'
import ArticleIconBlock from '@site/ui/molecules/ArticleIconBlock'
import styles from './slideArticleWithPhoneDesktop.css'

const SlideArticleWithPhoneDesktop = ({
  title,
  description,
  links,
  image: { src, preloader },
  backgroundColor,
  preload
}) => {
  return (
    <div style={{ backgroundColor: backgroundColor }}>
      <div className={styles.wrapper}>
        <article className={styles.article}>
          {title && <h2 className={styles.title}>{title}</h2>}
          <SlideText description={description} />
          <ArticleIconBlock links={links} />
        </article>
        <div className={styles.phone}>
          <PreloadableImage
            preload={preload}
            src={src}
            preloader={preloader}
            className={styles.screen}
          />
        </div>
      </div>
    </div>
  )
}

const hoc = compose(onlyUpdateForKeys(['preload']))

export default hoc(SlideArticleWithPhoneDesktop)
