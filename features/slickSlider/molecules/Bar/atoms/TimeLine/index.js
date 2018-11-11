import React from 'react'
import PropTypes from 'prop-types'
import { Spring } from 'react-spring'
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
        config={{ duration: SLIDE_DELAY }}
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
  animate: PropTypes.bool,
}

export default TimeLine
