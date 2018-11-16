import React from 'react'
import styles from './articleIconBlock.css'
import cx from 'classnames'
import IconButton from '@site/ui/molecules/IconButton'

const ArticleIconBlock = ({
  links,
  classNameBlock,
  classNameIcon,
  onLinkClick,
}) => {
  return (
    <div className={cx(styles.articleIconBlock, classNameBlock)}>
      {links &&
        links.map(({ text, id, ...rest }) => (
          <IconButton
            onClick={e => onLinkClick(id, e)}
            key={id}
            className={cx(styles.articleIconLink, classNameIcon)}
            text={text}
            {...rest}
          >
            {text}
          </IconButton>
        ))}
    </div>
  )
}

export default ArticleIconBlock
