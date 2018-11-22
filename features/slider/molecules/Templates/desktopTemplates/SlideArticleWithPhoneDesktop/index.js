import React from 'react'
import PropTypes from 'prop-types'
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
}) => (
  <div style={{ backgroundColor: backgroundColor }}>
    <div className={styles.wrapper}>
      <article className={styles.article}>
        {title && <h2 className={styles.title}>{title}</h2>}
        <SlideText description={description} />
        <ArticleIconBlock links={links} />
      </article>
      <div className={styles.phone}>
        <Img src={src} preloader={preloader} className={styles.screen} />
        {/* <Img
          className={styles.screen}
          src={[src]}
          loader={<img className={styles.placeholder} src={placeholder} />}
          container={children => {
            console.log(children)
            return (
              <Transition
                items={React.Children.toArray(children)}
                keys={child => child.props.src}
                from={{ opacity: 0 }}
                enter={{ opacity: 1 }}
                leave={{ opacity: 0 }}
              >
                {child => props => <div style={props}>{child}</div>}
              </Transition>
            )
          }}
        /> */}
        {/* <img src={src} className={styles.screen} /> */}
      </div>
    </div>
  </div>
)

SlideArticleWithPhoneDesktop.propTypes = {
  title: PropTypes.string,
  description: PropTypes.arrayOf(PropTypes.string),
  links: PropTypes.arrayOf(PropTypes.object),
  src: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
}

export default React.memo(SlideArticleWithPhoneDesktop)
