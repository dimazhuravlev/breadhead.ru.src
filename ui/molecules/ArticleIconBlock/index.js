import React from 'react'
import IconLink from '@site/ui/molecules/IconLink'
import styles from './articleIconBlock.css'
import cx from 'classnames'

const ArticleIconBlock = ({ links, classNameBlock, classNameIcon }) => {
  return (
    <div className={cx(styles.articleIconBlock, classNameBlock)}>
      {links &&
        links.map(link => (
          <IconLink
            key={link.href}
            className={cx(styles.articleIconLink, classNameIcon)}
            {...link}
          />
        ))}
    </div>
  )
}

export default ArticleIconBlock
