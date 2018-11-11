import React from 'react'
import PropTypes from 'prop-types'
import { Spring } from 'react-spring'
import { SLIDE_DELAY } from '@site/constants'
import styles from './timeLine.css'
class TimeLine extends React.Component {
  transform = 0

  render() {
    const {
      active,
      onRest,
      animate,
      isVisible,
      index,
      activeIndex,
    } = this.props

    return (
      <Spring
        reset={active}
        // immediate={!animate}
        from={{ transform: index < activeIndex ? 1 : this.transform }}
        to={{ transform: active && isVisible ? 1 : this.transform }}
        config={{ duration: SLIDE_DELAY - SLIDE_DELAY * this.transform }}
        onRest={onRest}
        onFrame={({ transform }) => {
          this.transform = transform
        }}
      >
        {({ transform }) => {
          return (
            <div className={styles.timeLine}>
              <div
                style={{ transform: `scaleX(${transform})` }}
                className={styles.progressBar}
              />
            </div>
          )
        }}
      </Spring>
    )
  }
}

TimeLine.propTypes = {
  active: PropTypes.bool,
  onRest: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  animate: PropTypes.bool,
}

export default TimeLine
