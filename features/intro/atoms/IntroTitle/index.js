import React from 'react'
import withNamespaces from '@site/lib/i18n/utils/withNamespaces'
import styles from './introTitle.css'

const IntroTitle = ({ t }) => (
  <h1 className={styles.Title}>{t('main-title')}</h1>
)

export default withNamespaces(['common'])(IntroTitle)
