import React from 'react'
import PropTypes from 'prop-types'
import { compose, onlyUpdateForKeys } from 'recompose'
import { SLIDE_DURATION } from '@site/constants'
import { range } from 'lodash'
import ProgressElement from './atoms/ProgressElement'
import styles from './progressBar.css'

class ProgressBar extends React.Component {
  constructor(props) {
    super(props)
    this.clickHandler = this.clickHandler.bind(this)
    this.timerHandler = this.timerHandler.bind(this)
  }

  clickHandler(e) {
    e.preventDefault()
    e.stopPropagation()
    const { quantity, changeSlide } = this.props
    const index = Math.floor(e.nativeEvent.offsetX / (e.nativeEvent.target.clientWidth / quantity))
    return changeSlide(index)
  }

  timerHandler() {
    return this.props.changeSlide()
  }

  render() {
    const { index, quantity, isVisible, duration, paused, delay } = this.props
    const elements = range(quantity)
    const slideDuration = duration > 0 ? duration : SLIDE_DURATION

    return (
      <div className={styles.bar} onAnimationEnd={this.timerHandler}>
        {elements.map((element) => {
          const active = index === element
          const activeParams = active ? {
            delay,
            duration: slideDuration,
            paused: paused || !isVisible,
          } : {}

          return (
            <ProgressElement
              key={element}
              passed={index > element}
              active={index === element}
              {...activeParams}
            />
          )
        })}
        <div className={styles.clickHandler} onClick={this.clickHandler} ></div>
      </div>
    )
  }
}

ProgressBar.defautProps = {
  duration: 0,
  delay: 0,
  paused: false,
  changeSlide: () => { }

}

ProgressBar.propTypes = {
  index: PropTypes.number,
  changeSlide: PropTypes.func,
  quantity: PropTypes.number,
  duration: PropTypes.number,
  delay: PropTypes.number
}

const ProgressBarHOC = compose(onlyUpdateForKeys(['index', 'isVisible', 'duration', 'paused']))

export default ProgressBarHOC(ProgressBar)
