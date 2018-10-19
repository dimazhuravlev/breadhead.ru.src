import React from 'react'
import PropTypes from 'prop-types'
import { GlobeIcon } from '@site/ui/atoms/icons'
import { ArticleIcon } from '@site/ui/atoms/icons'
import styles from './iconLink.css'
import cx from 'classnames'

const iconsMap = {
  globe: GlobeIcon,
  article: ArticleIcon
}

class IconLink extends React.Component {
  render() {
    const Icon = iconsMap[this.props.icontype]

    return (
      <div className={cx(styles.iconLink, this.props.className)}>
        {this.props.description && (
          <div className={styles.description}>{this.props.description}</div>
        )}
        <a
          className={styles.link}
          href={this.props.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {Icon && <Icon className={styles.icon} />}
          {this.props.text && (
            <div className={styles.text}>{this.props.text}</div>
          )}
        </a>
      </div>
    )
  }
}

IconLink.propTypes = {
  icontype: PropTypes.oneOf(['globe', 'article']),
  href: PropTypes.string.isRequired,
  description: PropTypes.string,
  text: PropTypes.string
}

export default IconLink
