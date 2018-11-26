import React from 'react'
import PropTypes from 'prop-types'
import { compose, onlyUpdateForKeys } from 'recompose'
import { Spring } from 'react-spring'
import styles from './timeLine.css'

class TimeLine extends React.Component {
  state = { reset: false }
  componentDidUpdate(prevProps) {
    if (prevProps.index > this.props.index) {
      this.transform = 0
      this.setState({ reset: true })
    }
  }

  transform = 0

  render() {
    const { state, onRest, duration } = this.props
    switch (state) {
    case 'frozen':
      return (
        <div className={styles.timeLine}>
          <div
            style={{ transform: `scaleX(${this.transform})` }}
            className={styles.progressBar}
          />
        </div>
      )
    case 'active':
      return (
        <Spring
          reset={this.state.reset}
          onRest={onRest}
          onFrame={({ transform }) => (this.transform = transform)}
          config={{
            duration: duration - duration * this.transform,
          }}
          from={{ transform: this.transform || 0 }}
          to={{ transform: 1 }}
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
    case 'empty':
      return (
        <div className={styles.timeLine}>
          <div
            style={{ transform: `scaleX(${0})` }}
            className={styles.progressBar}
          />
        </div>
      )
    case 'full':
      return (
        <div className={styles.timeLine}>
          <div
            style={{ transform: `scaleX(${1})` }}
            className={styles.progressBar}
          />
        </div>
      )

    default:
      return null
    }
  }
}

TimeLine.propTypes = {
  active: PropTypes.bool,
  onRest: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  animate: PropTypes.bool,
}

const TimeLineHOC = compose(
  onlyUpdateForKeys(['active', 'state', 'index', 'onRest'])
)

export default TimeLineHOC(TimeLine)
