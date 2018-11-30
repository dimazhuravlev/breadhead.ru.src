import React from 'react'
import VisibilitySensor from 'react-visibility-sensor'

import ExternalLink from '@site/ui/molecules/ExternalLink'
import Image from '@site/ui/atoms/Image'
import Descriptor from '@site/features/descriptor'
import TextBlock from '@site/ui/molecules/TextBlock'
import { NON_BREAKING_SPACE } from '@site/constants'
import styles from './footer.css'
import cx from 'classnames'

class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isVisible: false }
  }

  render() {
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
                <Descriptor name="Для связи" />

                <div className={styles.textBlocks}>
                  <TextBlock header="офис">
                    <ExternalLink href="https://goo.gl/maps/vud3y2m6k7m">
                      {`Итальянская улица,${NON_BREAKING_SPACE}14,`}
                    </ExternalLink>
                    <br />
                    мансарда №39
                    <br />
                    Санкт-Петербург, Россия, 191186
                  </TextBlock>
                  <TextBlock header="контакты">
                    <a className={styles.phoneLink} href="tel:+78129383779">
                      +7 812 938-37-79
                    </a>
                    <br />
                    <a href="mailto:hello@breadhead.ru">hello@breadhead.ru</a>
                  </TextBlock>
                  <TextBlock header="мы в соцсетях">
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

export default Footer
