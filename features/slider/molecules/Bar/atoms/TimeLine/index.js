import React from 'react'
import PropTypes from 'prop-types'
import { Spring } from 'react-spring'
import { TimingAnimation, Easing } from 'react-spring/dist/addons.cjs'
import { SLIDE_DELAY } from '@site/constants'
import styles from './timeLine.css'

class TimeLine extends React.PureComponent {
  constructor(props) {
    super(props)
    this.onRest = ({ transform }) => {
      if (transform === 1) {
        props.onRest()
      }
    }
    this.onRestBound = this.onRest.bind(this)
  }

  render() {
    const { activated, onRest, isActive, isVisible } = this.props
    console.log(isVisible)
    return (
      <Spring
        reset={activated}
        immediate={!isActive}
        from={{ transform: 0 }}
        to={{ transform: activated ? 1 : 0 }}
        impl={TimingAnimation}
        config={{ duration: SLIDE_DELAY, easing: Easing.linear }}
        onRest={this.onRestBound}
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
