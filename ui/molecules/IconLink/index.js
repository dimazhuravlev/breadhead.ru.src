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
      <React.Fragment>
        {this.props.tooltip && (
          <div className={styles.tooltip}>{this.props.tooltip}</div>
        )}
        <div className={styles.iconLink}>
          {this.props.description && (
            <div className={styles.description}>{this.props.description}</div>
          )}
          <a
            className={styles.icon}
            href={this.props.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon />
            {this.props.text && (
              <div className={styles.text}>{this.props.text}</div>
            )}
          </a>
        </div>
      </React.Fragment>
    )
  }
}

IconLink.propTypes = {
  icontype: PropTypes.oneOf(['globe', 'article']).isRequired,
  href: PropTypes.string.isRequired,
  description: PropTypes.string,
  text: PropTypes.string,
  tooltip: PropTypes.string
}

export default IconLink
