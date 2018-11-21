import React from 'react'
import PropTypes from 'prop-types'
import ExternalLink from '@site/ui/molecules/ExternalLink'
import styles from './iconLink.css'
import cx from 'classnames'
import Icon from '@site/ui/atoms/icons/Icon'

const iconTypeMap = {
  globe: 'GlobeIcon',
  article: 'ArticleIcon',
}

class IconLink extends React.Component {
  render() {
    const { icontype, description, href, text, className } = this.props

    return (
      <div className={cx(styles.iconLink, className)}>
        {description && <div className={styles.description}>{description}</div>}
        <ExternalLink className={styles.link} href={href}>
          <Icon className={styles.icon} name={iconTypeMap[icontype]} />
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
  text: PropTypes.string,
}

export default IconLink
