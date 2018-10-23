import React from 'react'
import PropTypes from 'prop-types'
import { Spring } from 'react-spring'
import { TimingAnimation, Easing } from 'react-spring/dist/addons.cjs'
import { SLIDE_DELAY } from '@site/constants'
import styles from './timeLine.css'

class TimeLine extends React.Component {
  render() {
    const { active, onRest, animate } = this.props
    return (
      <Spring
        reset={active}
        immediate={!animate}
        from={{ transform: 0 }}
        to={{ transform: active ? 1 : 0 }}
        impl={TimingAnimation}
        config={{ duration: SLIDE_DELAY, easing: Easing.linear }}
        onRest={onRest}
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
  animate: PropTypes.bool
}

export default TimeLine
