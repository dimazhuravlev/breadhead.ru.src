import React from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import PropTypes from 'prop-types'
import Slider from '@site/features/slider'
import Descriptor from '@site/features/descriptor'
import cx from 'classnames'
import styles from './case.css'
import withLang from '@site/lib/i18n/withLang'

class Case extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isVisible: false }
  }

  onVisibilityChange = isVisible => {
    !this.state.isVisible && isVisible && this.setState({ isVisible })
  }

  render() {
    const { name, lang, className, description, slides, priority } = this.props
    const { isVisible } = this.state
    return (
      <VisibilitySensor
        onChange={this.onVisibilityChange}
        partialVisibility
        delayedCall
      >
        <section
          key={lang}
          name={name}
          className={cx(
            styles.case,
            className,
            isVisible ? styles.visible : styles.inVisible
          )}
        >
          <Descriptor {...description} />
          {isVisible || priority ? (
            <Slider slides={slides} />
          ) : (
            <div className={styles.placeholder} />
          )}
        </section>
      </VisibilitySensor>
    )
  }
}

Case.propTypes = {
  priority: PropTypes.bool,
  description: PropTypes.object.isRequired,
  slides: PropTypes.arrayOf(PropTypes.object),
}

export default withLang(Case)
