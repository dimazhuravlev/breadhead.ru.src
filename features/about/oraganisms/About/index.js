import React from 'react'
import { withNamespaces } from '@site/lib/i18n'
import VisibilitySensor from 'react-visibility-sensor'
import PropTypes from 'prop-types'
import Descriptor from '@site/features/descriptor'
import Slider from '@site/features/slider'
import ExternalLink from '@site/ui/molecules/ExternalLink'
import TextBlock from '@site/ui/molecules/TextBlock'
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
              className={styles.descriptorMobile}
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
                {t('text-block-text-skills')}
              </TextBlock>

              <TextBlock header={t('text-block-header-practices')}>
                {t('text-block-text-practices-first')}
                <ExternalLink href="http://fullfort.agency/">
                  {t('text-block-text-practices-link')}
                </ExternalLink>
                {t('text-block-text-practices-second')}
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
                {t('text-block-text-technologies')}
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
