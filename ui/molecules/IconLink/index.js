import React from 'react'
import PropTypes from 'prop-types'
import ExternalLink from '@site/ui/molecules/ExternalLink'
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
    const { icontype, description, href, text, className } = this.props
    const Icon = iconsMap[icontype]

    return (
      <div className={cx(styles.iconLink, className)}>
        {description && <div className={styles.description}>{description}</div>}
        <ExternalLink className={styles.link} href={href}>
          {Icon && <Icon className={styles.icon} />}
          {text && <div className={styles.text}>{text}</div>}
        </ExternalLink>
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
