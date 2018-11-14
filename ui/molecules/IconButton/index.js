import React from 'react'
import PropTypes from 'prop-types'
import { GlobeIcon } from '@site/ui/atoms/icons'
import { ArticleIcon } from '@site/ui/atoms/icons'
import styles from './iconButton.css'
import cx from 'classnames'

const iconsMap = {
  globe: GlobeIcon,
  article: ArticleIcon,
}

class IconButton extends React.Component {
  render() {
    const { icontype, description, text, className, onClick } = this.props
    const Icon = iconsMap[icontype]

    return (
      <div className={cx(styles.iconButton, className)}>
        {description && <div className={styles.description}>{description}</div>}
        <button onClick={onClick} className={styles.button}>
          {Icon && <Icon className={styles.icon} />}
          {text && <div className={styles.text}>{text}</div>}
        </button>
      </div>
    )
  }
}

IconButton.propTypes = {
  onClick: PropTypes.func,
  icontype: PropTypes.oneOf(['globe', 'article']),
  description: PropTypes.string,
  text: PropTypes.string,
}

export default IconButton
