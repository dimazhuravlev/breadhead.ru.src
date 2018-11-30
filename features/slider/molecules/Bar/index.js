import React from 'react'
import PropTypes from 'prop-types'
import { compose, onlyUpdateForKeys } from 'recompose'
import { SLIDE_DURATION } from '@site/constants'
import { range } from 'lodash'
import TimeLine from '../../molecules/Bar/atoms/TimeLine'
import styles from './bar.css'

class Bar extends React.Component {
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
    const { index, quantity, isVisible, duration, paused } = this.props
    const timeLines = range(quantity)
    const slideDuration = duration > 0 ? duration : SLIDE_DURATION
    return (
      <div className={styles.bar} onAnimationEnd={this.timerHandler}>
        {timeLines.map((timeLine, i) => {
          return (
            <TimeLine
              duration={slideDuration}
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

Bar.defautProps = {
  duration: 0,
}

Bar.propTypes = {
  index: PropTypes.number,
  onRest: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  quantity: PropTypes.number,
  slideDuration: PropTypes.number,
}

const BarHOC = compose(onlyUpdateForKeys(['index', 'isVisible', 'duration', 'paused']))

export default BarHOC(Bar)
