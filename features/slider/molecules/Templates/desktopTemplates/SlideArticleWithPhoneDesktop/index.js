import React from 'react'
import { shouldUpdate } from 'recompose'
import Img from '@site/ui/molecules/Img'
import SlideText from '@site/ui/molecules/SlideText'
import ArticleIconBlock from '@site/ui/molecules/ArticleIconBlock'
import styles from './slideArticleWithPhoneDesktop.css'

const SlideArticleWithPhoneDesktop = ({
  title,
  description,
  links,
  image: { src, preloader },
  backgroundColor,
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
          <Img src={src} preloader={preloader} className={styles.screen} />
        </div>
      </div>
    </div>
  )
}

export default shouldUpdate(() => false)(SlideArticleWithPhoneDesktop)
