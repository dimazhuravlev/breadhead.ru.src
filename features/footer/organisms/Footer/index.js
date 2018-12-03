import React from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import withNamespaces from '@site/lib/i18n/utils/withNamespaces'

import ExternalLink from '@site/ui/molecules/ExternalLink'
import Image from '@site/ui/atoms/Image'
import Descriptor from '@site/features/descriptor'
import TextBlock from '@site/ui/molecules/TextBlock'
import styles from './footer.css'
import cx from 'classnames'

class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isVisible: false }
  }

  render() {
    const { t } = this.props
    const date = new Date()

    return (
      <footer id="footer">
        <div className={styles.footer}>
          <VisibilitySensor
            onChange={isVisible => {
              !this.state.isVisible && isVisible && this.setState({ isVisible })
            }}
            partialVisibility
            delayedCall
          >
            <div
              className={
                this.state.isVisible ? styles.visible : styles.inVisible
              }
            >
              <div className={cx(styles.content)}>
                <Descriptor
                  className={styles.caseNameOnly}
                  name={t('contact-title')}
                />

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

              <div className={styles.wrapper}>
                <span className={styles.copyright}>
                  {`2009–${date.getFullYear()}`}
                </span>
                <div className={styles.footerImageWrapper}>
                  {this.state.isVisible && (
                    <Image
                      className={styles.footerImage}
                      src="animationBottom.gif"
                    />
                  )}
                </div>
              </div>
            </div>
          </VisibilitySensor>
        </div>
      </footer>
    )
  }
}

export default withNamespaces(['common'])(Footer)
