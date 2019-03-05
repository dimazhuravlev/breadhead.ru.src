import React from 'react'
import Contacts from '@site/features/contacts'
import styles from './Footer.css'
import { withNamespaces } from '@site/lib/i18n'
const Footer = ({ t }) => (
  <footer className={styles.Footer}>
    <Contacts t={t} />
  </footer>
)

export default withNamespaces(['common'])(Footer)
