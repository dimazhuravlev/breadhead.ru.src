import React from 'react'
import PropTypes from 'prop-types'
import Icon from '@site/ui/atoms/icons/Icon'
import styles from './iconButton.css'
import cx from 'classnames'

const iconTypeMap = {
  globe: 'GlobeIcon',
  article: 'ArticleIcon'
}

class IconButton extends React.Component {
  render() {
    const { icontype, description, text, className, onClick } = this.props

    return (
      <div className={cx(styles.iconButton, className)}>
        {description && <div className={styles.description}>{description}</div>}
        <button onClick={onClick} className={styles.button}>
          {icontype && (
            <Icon className={styles.icon} name={iconTypeMap[icontype]} />
          )}
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
  text: PropTypes.string
}

export default IconButton
