import React from 'react'
import styles from './iconLink.css'

/* <SiteLinkIcon className={styles.SiteLinkIcon} />
    <ArticleLinkIcon className={styles.ArticleLinkIcon} /> */

class IconLink extends React.Component {
  render() {
    return <div>{this.props.icon}</div>
  }
}

export default IconLink
