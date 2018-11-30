import React from 'react'
import PropTypes from 'prop-types'
import { compose, onlyUpdateForKeys } from 'recompose'
import { SLIDE_DURATION } from '@site/constants'
import { range } from 'lodash'
import ProgressBarSection from './atoms/ProgressElement'
import styles from './progressBar.css'

class ProgressBar extends React.Component {
  constructor(props) {
    super(props)
    this.clickHandler = this.clickHandler.bind(this)
    this.timerHandler = this.timerHandler.bind(this)
  }
  
  clickHandler(e) {
    const { quantity, changeSlide } = this.props
    const index = Math.floor ( e.nativeEvent.offsetX / (e.nativeEvent.target.clientWidth / quantity ) )
    return changeSlide(index)
  }
  
  timerHandler() {
    return this.props.changeSlide()
  }
  
  render() {
    const { index, quantity, isVisible, duration, paused, delay } = this.props
    const timeLines = range(quantity)
    const slideDuration = duration > 0 ? duration : SLIDE_DURATION
    return (
      <div className={styles.bar} onAnimationEnd={this.timerHandler}>
        {timeLines.map((timeLine, i) => {
          return (
            <ProgressBarSection
              duration={slideDuration}
              delay={delay}
              key={timeLine}
              active={index === timeLine}
              paused={paused || !isVisible}
              passed={index > timeLine}
            />
          )
        })}
        <div className={styles.clickHandler} onClick={ this.clickHandler } ></div>
      </div>
    )
  }
}

ProgressBar.defautProps = {
  duration: 0,
  delay: 0,
  paused: false,
  changeSlide: () => {} 
  
}

ProgressBar.propTypes = {
  index: PropTypes.number,
  changeSlide: PropTypes.func,
  quantity: PropTypes.number,
  duration: PropTypes.number,
  delay: PropTypes.number
}

const BarHOC = compose(onlyUpdateForKeys(['index', 'isVisible', 'duration', 'paused']))

export default BarHOC(ProgressBar)
