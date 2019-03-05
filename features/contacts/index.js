import React from 'react'
import cx from 'classnames'
import Descriptor from '@site/features/descriptor'
import TextBlock from '@site/ui/molecules/TextBlock'
import styles from './Contacts.css'
import ExternalLink from '@site/ui/molecules/ExternalLink'

const Contacts = ({ t }) => (
  <div className={cx(styles.content)}>
    <Descriptor className={styles.caseNameOnly} name={t('contact-title')} />

    <div className={styles.textBlocks}>
      <TextBlock header={t('text-block-address')}>
        <ExternalLink href="https://goo.gl/maps/vud3y2m6k7m">
          {t('text-block-text-address-link')}
        </ExternalLink>
        <br />
        {t('text-block-text-address')}
      </TextBlock>
      <TextBlock header={t('text-block-phone')}>
        <a className={styles.phoneLink} href="tel:+78129383779">
          +7 812 938-37-79
        </a>
        <br />
        <a href="mailto:hello@breadhead.ru">hello@breadhead.ru</a>
      </TextBlock>
      <TextBlock header={t('text-block-social')}>
        <ExternalLink href="https://www.facebook.com/breadhead.ru">
          Facebook
        </ExternalLink>
        <br />
        <ExternalLink href="https://medium.com/breadhead-stories">
          Medium
        </ExternalLink>
        <br />
        <ExternalLink href="https://www.instagram.com/breadhead.ru">
          Instagram
        </ExternalLink>
      </TextBlock>
    </div>
  </div>
)

export default Contacts
