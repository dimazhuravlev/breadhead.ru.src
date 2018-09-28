import React from 'react'
import { GlobeIcon } from '@site/ui/atoms/icons'
import { ArticleIcon } from '@site/ui/atoms/icons'
import styles from './iconLink.css'

class IconLink extends React.Component {
  render() {
    const iconsMap = {
      globe: GlobeIcon,
      article: ArticleIcon
    }

    const Icon = iconsMap[this.props.icon]

    return (
      <div>
        <a href={this.props.href} className={styles.iconLink}>
          <Icon />
        </a>
        <div className={styles.iconText}>{this.props.text}</div>
        <div className={styles.iconTooltip}>{this.props.title}</div>
      </div>
    )
  }
}

export default IconLink
