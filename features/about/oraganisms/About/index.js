import React from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import PropTypes from 'prop-types'
import Descriptor from '@site/features/descriptor'
import Slider from '@site/features/slider'
import TextBlock from '@site/ui/molecules/TextBlock'
import { ReactIcon, NodeIcon, SwiftIcon } from '@site/ui/atoms/icons'
import { NON_BREAKING_SPACE } from '@site/constants'
import AboutText from '../../atoms/AboutText'
import styles from './about.css'
import cx from 'classnames'
import { Desktop, Mobile } from '@site/features/responsive'
class About extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isVisible: false }
  }

  onVisibilityChange = isVisible => {
    !this.state.isVisible && isVisible && this.setState({ isVisible })
  }

  render() {
    const { aboutDataDesktop, aboutDataMobile, name } = this.props
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
            <AboutText>
              {`Breadhead проектирует и${NON_BREAKING_SPACE}выпускает сервисы и${NON_BREAKING_SPACE}приложения. Совершенствует деятельность компаний с${NON_BREAKING_SPACE}помощью технологий.`}
            </AboutText>
            {isVisible ? (
              <>
                <Desktop>
                  <Slider
                    slides={aboutDataDesktop.slides}
                    className={cx(styles.aboutSlider, styles.sliderDesktop)}
                  />
                </Desktop>
                <Mobile>
                  <Slider
                    slides={aboutDataMobile.slides}
                    className={cx(styles.aboutSlider, styles.sliderMobile)}
                  />
                </Mobile>
              </>
            ) : (
              <div className={styles.placeholder} />
            )}
            <AboutText>
              <React.Fragment>
                {`Мы стремимся к${NON_BREAKING_SPACE}открытой рабочей среде, в${NON_BREAKING_SPACE}которой студия
          и${NON_BREAKING_SPACE}клиент —${NON_BREAKING_SPACE}одна команда. Верим, что такой подход меняет отношение к${NON_BREAKING_SPACE}делу и${NON_BREAKING_SPACE}помогает создавать полезные
          продукты.`}
              </React.Fragment>
            </AboutText>
            <div className={styles.aboutTextBlocks}>
              <TextBlock header="экспертиза">
                {`Образовательные сервисы / E-commerce / Службы бронирования и${NON_BREAKING_SPACE}доставки / Инструменты автоматизации / Медиа`}
              </TextBlock>

              <TextBlock header="практики">
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
                header="технологии"
                icons={
                  <React.Fragment>
                    <ReactIcon />
                    <NodeIcon />
                    <SwiftIcon />
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
  name: PropTypes.string,
}

export default About
