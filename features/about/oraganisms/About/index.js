import React from 'react'
import withNamespaces from '@site/lib/i18n/utils/withNamespaces'
import VisibilitySensor from 'react-visibility-sensor'
import PropTypes from 'prop-types'
import Descriptor from '@site/features/descriptor'
import Slider from '@site/features/slider'
import TextBlock from '@site/ui/molecules/TextBlock'
import { NON_BREAKING_SPACE } from '@site/constants'
import AboutText from '../../atoms/AboutText'
import styles from './about.css'
import cx from 'classnames'
class About extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isVisible: false }
  }

  onVisibilityChange = isVisible => {
    !this.state.isVisible && isVisible && this.setState({ isVisible })
  }

  render() {
    const { aboutDataDesktop, aboutDataMobile, name, t } = this.props
    const { isVisible } = this.state
    return (
      <VisibilitySensor
        onChange={this.onVisibilityChange}
        partialVisibility
        delayedCall
      >
        <section
          name={name}
          className={cx(
            styles.about,
            this.state.isVisible ? styles.visible : styles.inVisible
          )}
        >
          <div>
            <Descriptor
              className={cx(styles.caseNameOnly, styles.descriptorDesktop)}
              name={aboutDataDesktop.description.name}
            />
            <Descriptor
              className={cx(styles.caseNameOnly, styles.descriptorMobile)}
              name={aboutDataMobile.description.name}
            />
          </div>
          <div className={styles.aboutContent}>
            <AboutText>{t('about-text1')}</AboutText>
            {isVisible ? (
              <>
                <Slider
                  slides={aboutDataDesktop.slides}
                  className={cx(styles.aboutSlider, styles.sliderDesktop)}
                />
                <Slider
                  slides={aboutDataMobile.slides}
                  className={cx(styles.aboutSlider, styles.sliderMobile)}
                />
              </>
            ) : (
              <div className={styles.placeholder} />
            )}
            <AboutText>
              <React.Fragment>{t('about-text2')}</React.Fragment>
            </AboutText>
            <div className={styles.aboutTextBlocks}>
              <TextBlock header={t('text-block-header-skills')}>
                {`Образовательные сервисы / E-commerce / Службы бронирования и${NON_BREAKING_SPACE}доставки / Инструменты автоматизации / Медиа`}
              </TextBlock>

              <TextBlock header={t('text-block-header-practices')}>
                {'Исследования / Бренд-консалтинг ('}
                <a
                  className={styles.TextBlockLink}
                  href="http://fullfort.agency/"
                >
                  Fullfort
                </a>
                {`) / Дизайн, проектирование / Веб +${NON_BREAKING_SPACE}мобильная разработка`}
              </TextBlock>

              <TextBlock
                header={t('text-block-header-technologies')}
                icons={
                  <React.Fragment>
                    <img src="static/img/react.png" width="36" height="35" />
                    <img src="static/img/node.png" width="36" height="35" />
                    <img src="static/img/swift.png" width="36" height="35" />
                  </React.Fragment>
                }
              >
                Веб: React, Node.js, PHP, Typescript / iOS: Swift / Android:
                Kotlin, Java
              </TextBlock>
            </div>
          </div>
        </section>
      </VisibilitySensor>
    )
  }
}

About.propTypes = {
  aboutDataDesktop: PropTypes.object,
  aboutDataMobile: PropTypes.object,
  name: PropTypes.string
}

export default withNamespaces(['common'])(About)
