import React from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import PropTypes from 'prop-types'
import Slider from '@site/features/slider'
import Descriptor from '@site/features/descriptor'
import cx from 'classnames'
import styles from './case.css'

class Case extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isVisible: false }
  }

  render() {
    const { name, className, description, slides } = this.props
    return (
      <VisibilitySensor
        onChange={isVisible => {
          !this.state.isVisible && isVisible && this.setState({ isVisible })
        }}
        partialVisibility
        delayedCall
        offset={{ bottom: 40 }}
      >
        <section
          name={name}
          className={cx(
            styles.case,
            className,
            this.state.isVisible ? styles.visible : styles.inVisible
          )}
        >
          <Descriptor {...description} />
          <Slider slides={slides} />
        </section>
      </VisibilitySensor>
    )
  }
}

Case.propTypes = {
  description: PropTypes.object.isRequired,
  slides: PropTypes.arrayOf(PropTypes.object),
}

export default Case
