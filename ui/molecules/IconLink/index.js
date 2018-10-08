import React from 'react'
import PropTypes from 'prop-types'
import { GlobeIcon } from '@site/ui/atoms/icons'
import { ArticleIcon } from '@site/ui/atoms/icons'
import styles from './iconLink.css'

const iconsMap = {
  globe: GlobeIcon,
  article: ArticleIcon
}

class IconLink extends React.Component {
  render() {
    const Icon = iconsMap[this.props.icontype]

    return (
      <div>
        <a
          className={styles.iconLink}
          href={this.props.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon />
        </a>
        {this.tooltip && (
          <div className={styles.iconTooltip}>{this.props.tooltip}</div>
        )}
        {this.text && <div className={styles.iconText}>{this.props.text}</div>}
      </div>
    )
  }
}

IconLink.propTypes = {
  icontype: PropTypes.oneOf(['globe', 'article']),
  href: PropTypes.string,
  text: PropTypes.string,
  tooltip: PropTypes.string
}

export default IconLink
