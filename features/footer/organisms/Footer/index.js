import Contacts from '@site/features/contacts'
import { withNamespaces } from '@site/lib/i18n'
import Image from '@site/ui/atoms/Image'
import React from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import styles from './footer.css'

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
              <Contacts t={t} />

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
