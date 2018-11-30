import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames/bind'
import styles from './timeLine.css'

const cx = cn.bind(styles)

class TimeLine extends React.Component {
  render() {
    const { active, duration, passed, delay } = this.props
    return (
      <div className={cx('timeLine', {active, passed} ) }>
        { active && <div style={{ 
          animationDuration: `${duration}ms`,
          animationDelay: `${delay}ms`,
        }} className={cx('progressLine')} /> }
      </div>
    )
  }
}

TimeLine.propTypes = {
  active: PropTypes.bool,
  passed: PropTypes.bool,
  duration: PropTypes.number,
  delay: PropTypes.number
}

export default TimeLine;