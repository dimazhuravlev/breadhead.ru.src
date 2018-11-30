import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames/bind'
import styles from './timeLine.css'

const cx = cn.bind(styles)

class TimeLine extends React.Component {
  render() {
    const { active, duration, passed, delay, paused } = this.props
    return (
      <div className={cx('timeLine', { passed, paused } ) }>
        { active && <div className={cx('progressLine')} style={{ 
          animationDuration: `${duration}ms`,
          animationDelay: `${delay}ms`,
        }} /> }
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